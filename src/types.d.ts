type State = { mehnirs: Mehnir[] };

type Action =
  | { type: "addMehnir"; location: number }
  | { type: "removeMehnir"; location: number }
  | { type: "incrementMehnirCounter"; location: number }
  | { type: "decrementMehnirCounter"; location: number }
  | { type: "nextDay" };

type Mehnir = {
  location: number;
  title: string;
  dial: number;
};

