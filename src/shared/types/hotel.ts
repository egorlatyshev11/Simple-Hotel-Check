export interface Location {
  country: string;
  geo: {
    lon: number;
    lat: number;
  };
  name: string;
  state: null | string;
}

export interface Hotel {
  hotelId: number;
  hotelName: string;
  location: Location;
  locationId: number;
  priceAvg: number;
  priceFrom: number;
  pricePercentile: any;
  stars: number;
}
