import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  alleventsMgr: [],
  processedeventsMgr: [],
  showeventsMgr: [],
  searcheventsMgr: [],
  currentUser: {},
  users: [],
  currentPage: 1,
  totalPages: 1,
};

type state = {
  alleventsMgr: object[];
  processedeventsMgr: PokeeventsMgr[];
  showeventsMgr: object[];
  searcheventsMgr: any[];
  currentPage: number;
  totalPages: number;
  currentUser: user;
  users: user[];
};

type user = {
  email?: [];
  password?: [];
  picture?: [];
  favorites?: [];
  created?: [];
};

type PokeeventsMgr = {
  id: number;
  name: string;
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  url: string;
};

type Fetching = {
  eventsMgr?: any;
};

export const eventsMgrSlice = createSlice({
  name: "eventsMgr",
  initialState,
  reducers: {
    seteventsMgr: (state, action: PayloadAction<Fetching>) => {
      state.alleventsMgr = action.payload.eventsMgr.results;
    },
    processedeventsMgr: (state, action: PayloadAction<any>) => {
      state.processedeventsMgr = action.payload.eventsMgr;
      state.searcheventsMgr = state.processedeventsMgr;
      state.showeventsMgr = state.searcheventsMgr.slice(0, 12);
      state.totalPages = Math.ceil(state.processedeventsMgr.length / 12);
    },
    setNextPage: (state) => {
      if (state.currentPage < state.totalPages) {
        state.currentPage = state.currentPage + 1;
        state.showeventsMgr = state.searcheventsMgr.slice(
          (state.currentPage - 1) * 12,
          state.currentPage * 12
        );
      }
    },
    setPrevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage = state.currentPage - 1;
        state.showeventsMgr = state.searcheventsMgr.slice(
          (state.currentPage - 1) * 12,
          state.currentPage * 12
        );
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      state.showeventsMgr = state.searcheventsMgr.slice(
        (state.currentPage - 1) * 12,
        state.currentPage * 12
      );
    },
    setSearch: (state: state, action) => {
      let number = Number(action.payload);
      if (!number) {
        state.searcheventsMgr = state.processedeventsMgr.filter((d) =>
          d.name.includes(action.payload)
        );
      } else {
        state.searcheventsMgr = state.processedeventsMgr.filter((d) => d.id === number);
      }
      if (action.payload === "") {
        state.searcheventsMgr = state.processedeventsMgr;
      }
      state.showeventsMgr = state.searcheventsMgr.slice(0, 12);
      state.totalPages = Math.ceil(state.searcheventsMgr.length / 12);
      state.currentPage = 1;
    },
    setFilter: (state: state, action) => {
      state.searcheventsMgr = state.processedeventsMgr.filter(
        (d) => d.types[0].type.name === action.payload
      );
      if (action.payload === "") {
        state.searcheventsMgr = state.processedeventsMgr;
      }
      state.showeventsMgr = state.searcheventsMgr.slice(0, 12);
      state.totalPages = Math.ceil(state.searcheventsMgr.length / 12);
      state.currentPage = 1;
    },
    setOrder: (state: state, action) => {
      if (action.payload === "AB") {
        state.searcheventsMgr = state.searcheventsMgr.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
      } else if (action.payload === "BA") {
        state.searcheventsMgr = state.searcheventsMgr.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
      } else if (action.payload === "12") {
        state.searcheventsMgr = state.searcheventsMgr.sort((a, b) => {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        });
      } else if (action.payload === "21") {
        state.searcheventsMgr = state.searcheventsMgr.sort((a, b) => {
          if (a.id < b.id) return 1;
          if (a.id > b.id) return -1;
          return 0;
        });
      }
      state.showeventsMgr = state.searcheventsMgr.slice(0, 12);
      state.totalPages = Math.ceil(state.searcheventsMgr.length / 12);
      state.currentPage = 1;
    }
}
);

export const {
  seteventsMgr,
  setNextPage,
  setPrevPage,
  processedeventsMgr,
  setCurrentPage,
  setSearch,
  setFilter,
  setOrder,
} = eventsMgrSlice.actions;

export default eventsMgrSlice.reducer;
