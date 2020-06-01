import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      "p1",
      "Mansion in Karen",
      "Suitable for families",
      "https://ocdn.eu/pulscms-transforms/1/ll7k9kqTURBXy8yZmEyMmE1YzMxODk4NTJkNmRlMzczYjM2YWMzYzMzOC5qcGVnkpUDAAzNAljNAVKVAs0DBwDDw4KhMAGhMQE",
      149
    ),
    new Place(
      "p2",
      "Apartment in Lavington",
      "Suitable for couples",
      "https://ocdn.eu/pulscms-transforms/1/ll7k9kqTURBXy8yZmEyMmE1YzMxODk4NTJkNmRlMzczYjM2YWMzYzMzOC5qcGVnkpUDAAzNAljNAVKVAs0DBwDDw4KhMAGhMQE",
      110
    ),
    new Place(
      "p3",
      "Town House in Kileleshwa",
      "Suitable for couples",
      "https://ocdn.eu/pulscms-transforms/1/ll7k9kqTURBXy8yZmEyMmE1YzMxODk4NTJkNmRlMzczYjM2YWMzYzMzOC5qcGVnkpUDAAzNAljNAVKVAs0DBwDDw4KhMAGhMQE",
      80
    ),
    new Place(
      "p4",
      "Apartment in Lavington",
      "Suitable for families",
      "https://ocdn.eu/pulscms-transforms/1/ll7k9kqTURBXy8yZmEyMmE1YzMxODk4NTJkNmRlMzczYjM2YWMzYzMzOC5qcGVnkpUDAAzNAljNAVKVAs0DBwDDw4KhMAGhMQE",
      60
    ),
    new Place(
      "p5",
      "Apartment in Kitisuru",
      "Suitable for couples",
      "https://ocdn.eu/pulscms-transforms/1/ll7k9kqTURBXy8yZmEyMmE1YzMxODk4NTJkNmRlMzczYjM2YWMzYzMzOC5qcGVnkpUDAAzNAljNAVKVAs0DBwDDw4KhMAGhMQE",
      85
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}
}
