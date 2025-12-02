import {ApiUrl} from "../envs";
import type {IAuthorGroup} from "./AuthorGroup";
import type { IGroupedSearchable } from "../interfaces/IGroupedSearchable";

export type IAuthor = {
  _id: string,
  firstname: string,
  middlename: string,
  lastname: string,
  birth_date: string,
  death_date: string,
  book_ids: string[],
  group_ids: string[],
  roles: string,
  important_bullet_points: string[],
  question_biography: string,
  long_biography: string
}

export async function SearchableFromAuthor(author: IAuthor): Promise<IGroupedSearchable> {
  const resp = await fetch(`${ApiUrl}/authors/${author._id}/group`);
  const data: IAuthorGroup[] = await resp.json();

  return { 
    _id: author._id, 
    group_name: data[0]?.name || "idk", 
    value: `${author.firstname} ${author.lastname}` 
  };
}
