import { createSlice } from "@reduxjs/toolkit";
import eventos from "../../../../data/events";

const initialState = {
allEvents:eventos,
  currentEvents: [],
  currentPage: 1,
  totalPages: 1,
  quantityPerPage: 8,
};
type events = {
    nombre: string;
    descripcion: string;
    coordenadas?: [number, number];
    fechas: [string, string];
    urlDeImagen: string;
}

type state = {
    allEvents: events[],
    currentEvents: events[],
    currentPage: number,
    totalPages: number,
    quantityPerPage: number,
};

function divideData(state:state){
    state.currentEvents = state.allEvents.slice(
        (state.currentPage - 1) * state.quantityPerPage,
        state.currentPage * state.quantityPerPage);
}

export const eventsMgrSlice = createSlice({
  name: "eventsMgr",
  initialState,
  reducers: {
    setInitialState: (state:state) => {
        divideData(state),
        state.totalPages = Math.ceil(state.allEvents.length / state.quantityPerPage)
    },
    setPrevPage: (state:state) => {
      if (state.currentPage > 1) {
        state.currentPage = state.currentPage - 1;
        divideData(state)
      }
    },
    setNextPage: (state:state) => {
        if (state.currentPage < state.totalPages) {
            state.currentPage = state.currentPage - 1;
            divideData(state)
        }
    },
    setCurrentPage: (state:state, action) => {
      state.currentPage = action.payload;
      divideData(state)
    },
}});

export const {
  setInitialState,
  setNextPage,
  setPrevPage,
  setCurrentPage,
} = eventsMgrSlice.actions;

export default eventsMgrSlice.reducer;
