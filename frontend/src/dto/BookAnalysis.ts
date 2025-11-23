import {ApiUrl} from "../envs";
import type {IGroupedSearchable} from "../interfaces/IGroupedSearchable";
import type {IAuthor} from "./Author";

export type IBookAnalysis = {
  _id: string;
  name: string;
  release_year: number;
  author_ids: string[];
  basic_info: string[];
  themes: string[];
  motives: string[];
  timestamp_info_points: string[];
  composition: string[];
  main_characters: { name: string, bullet_points: string[] }[];
  narrator_bullet_points: string[];
  story: string;
  main_thought_points: string[];
  language_devices: string[];
  context: string;
};

export async function GroupedSearchableFromBookAnalysis(book: IBookAnalysis): Promise<IGroupedSearchable> {
  let author_names: string[] = [];
  for(const a of book.author_ids) {
    const resp = await fetch(`${ApiUrl}/authors/${a}`);
    const data: IAuthor = await resp.json();
    author_names.push(`${data.firstname} ${data.lastname}`)
  }
  
  return { _id: book._id, group_name: author_names.join(",").toString(), value: book.name }
}
