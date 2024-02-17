import { faEye, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEventBus } from "@vueuse/core";

import { fetcher } from "@/api/schema";
import { getGalaxyInstance } from "@/app";
import Filtering, { contains, type ValidFilter } from "@/utils/filtering";
import { rethrowSimple } from "@/utils/simple-error";

import type { ActionArray, FieldArray, GridConfig } from "./types";

const { emit } = useEventBus<string>("grid-router-push");

/**
 * Api endpoint handlers
 */
const getPages = fetcher.path("/api/pages").method("get").create();

/**
 * Local types
 */
type SortKeyLiteral = "create_time" | "title" | "update_time" | "username" | undefined;
type PageEntry = Record<string, unknown>;

/**
 * Request and return data from server
 */
async function getData(offset: number, limit: number, search: string, sort_by: string, sort_desc: boolean) {
    // TODO: Avoid using Galaxy instance to identify current user
    const Galaxy = getGalaxyInstance();
    const userId = !Galaxy.isAnonymous && Galaxy.user.id;
    if (!userId) {
        rethrowSimple("Please login to access this page.");
    }
    const { data, headers } = await getPages({
        limit,
        offset,
        search,
        sort_by: sort_by as SortKeyLiteral,
        sort_desc,
        show_published: false,
        user_id: userId,
    });
    const totalMatches = parseInt(headers.get("total_matches") ?? "0");
    return [data, totalMatches];
}

/**
 * Actions are grid-wide operations
 */
const actions: ActionArray = [
    {
        title: "Create",
        icon: faPlus,
        handler: () => {
            emit("/pages/create");
        },
    },
];

/**
 * Declare columns to be displayed
 */
const fields: FieldArray = [
    {
        title: "Title",
        key: "title",
        type: "operations",
        width: 40,
        operations: [
            {
                title: "View",
                icon: faEye,
                condition: (data: PageEntry) => !data.deleted,
                handler: (data: PageEntry) => {
                    emit(`/published/page?id=${data.id}`);
                },
            },
        ],
    },
    {
        key: "create_time",
        title: "Created",
        type: "date",
    },
    {
        key: "update_time",
        title: "Updated",
        type: "date",
    },
    {
        key: "owner",
        title: "Owner",
        type: "text",
    },
];

/**
 * Declare filter options
 */
const validFilters: Record<string, ValidFilter<string | boolean | undefined>> = {
    title: { placeholder: "title", type: String, handler: contains("title"), menuItem: true },
    slug: { handler: contains("slug"), menuItem: false },
};

/**
 * Grid configuration
 */
const gridConfig: GridConfig = {
    id: "pages-published-grid",
    actions: actions,
    fields: fields,
    filtering: new Filtering(validFilters, undefined, false, false),
    getData: getData,
    plural: "Pages",
    sortBy: "update_time",
    sortDesc: true,
    sortKeys: ["create_time", "title", "update_time"],
    title: "Published Pages",
};

export default gridConfig;
