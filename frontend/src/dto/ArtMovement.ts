import type {ISearchable} from "../interfaces/ISearchable";

export type IArtMovement = {
  _id: string;
  name: string;
  description: string;
  bullet_points: Array<string>;
  typical_genres: Array<string>;
  notable_author_ids: Array<string>;
  timespan: string;
  recognition: string;
  short_desc: string;
  text_explanation: string;
  text_sample: string;
  text_source: string;
};

export function ArtMovementToSearchable(artMovement: IArtMovement): ISearchable {
  return { id: artMovement._id, value: artMovement.name };
}
