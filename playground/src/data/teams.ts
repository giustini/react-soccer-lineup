import type { Team } from 'react-soccer-lineup'

export const teams: Record<number, Record<string, Team>> = {
  1: {
    '4-4-2': {
      squad: {
        gk: { number: 1 },
        df: [
          { number: 2 },
          { number: 4 },
          { number: 5 },
          { number: 3 },
        ],
        cm: [
          { number: 11 },
          { number: 6 },
          { number: 8 },
          { number: 7 },
        ],
        fw: [
          { number: 9 },
          { number: 10 },
        ],
      },
    },
    '4-3-3': {
      squad: {
        gk: { number: 1 },
        df: [
          { number: 2 },
          { number: 4 },
          { number: 5 },
          { number: 3 },
        ],
        cm: [
          { number: 6 },
          { number: 8 },
          { number: 10 },
        ],
        fw: [
          { number: 11 },
          { number: 9 },
          { number: 7 },
        ],
      },
    },
    '3-5-2': {
      squad: {
        gk: { number: 1 },
        df: [
          { number: 2 },
          { number: 4 },
          { number: 3 },
        ],
        cm: [
          { number: 6 },
          { number: 5 },
          { number: 10 },
          { number: 8 },
          { number: 7 },
        ],
        fw: [
          { number: 11 },
          { number: 9 },
        ],
      },
    },
    '4-2-3-1': {
      squad: {
        gk: {number: 1},
        df: [
          {number: 2},
          {number: 4},
          {number: 5},
          {number: 3},
        ],
        cdm: [
          {number: 6},
          {number: 8},
        ],
        cm: [
          {number: 11},
          {number: 10},
          {number: 7},
        ],
        fw: [
          {number: 9},
        ],
      },
    }
  },
  2: {
    home: {
      squad: {
        gk: { number: 1 },
        df: [
          { number: 2 },
          { number: 4 },
          { number: 5 },
          { number: 3 },
        ],
        cm: [
          { number: 6 },
          { number: 8 },
          { number: 7 },
          { number: 11 },
        ],
        fw: [
          { number: 9 },
          { number: 10 },
        ],
      },
      style: {
        color: "#ffa17a",
        borderColor: "#333333",
        numberColor: "#333333",
      }
    },
    away: {
      squad: {
        gk: {number: 1},
        df: [
          {number: 2},
          {number: 4},
          {number: 5},
          {number: 3},
        ],
        cdm: [
          {number: 6},
          {number: 8},
        ],
        cm: [
          {number: 11},
          {number: 10},
          {number: 7},
        ],
        fw: [
          {number: 9},
        ],
      },
    },
  },
  3: {
    home: {
      squad: {
        gk: {number: 1},
        df: [{number: 2}],
        cm: [{number: 3}, {number: 4}],
        fw: [{number: 5}]
      },
      style: {
        color: "#ede9d0",
        borderColor: "#712230",
        numberColor: "#712230",
      }
    },
    away: {
      squad: {
        gk: {number: 1},
        df: [{number: 2}, {number: 3}, {number: 4}],
        cm: [{number: 5}]
      },
      style: {
        color: "#712230",
        borderColor: "#efefdc",
        numberColor: "#efefdc",
      }
    },
  },
  4: {
    home: {
      squad: {
        gk: { number: 1, name: 'Alisson' },
        df: [
          { number: 12, name: 'Bradley' },
          { number: 5, name: 'Konate' },
          { number: 4, name: 'Van Dijk' },
          { number: 26, name: 'Robertson' },
        ],
        cdm: [
          { number: 38, name: 'Gravenberch' },
        ],
        cm: [
          { number: 8, name: 'Szoboszlai' },
          { number: 10, name: 'Mac Allister' },
        ],
        fw: [
          { number: 11, name: 'Salah' },
          { number: 22, name: 'Ekitike' },
          { number: 7, name: 'Wirtz' },
        ],
      },
      style: {
        color: "#a71f28",
        borderColor: "#ffffff",
        numberColor: "#ffffff",
        nameColor: "#ffffff",
      }
    },
    away: {
      squad: {
        gk: { number: 1, name: 'Courtois' },
        df: [
          { number: 8, name: 'Valverde' },
          { number: 3, name: 'Militao' },
          { number: 24, name: 'Huijsen' },
          { number: 18, name: 'Carreras' },
        ],
        cm: [
          { number: 6, name: 'Camavinga' },
          { number: 14, name: 'Tchouameni' },
          { number: 15, name: 'A. Güler' },
        ],
        cam: [
          { number: 5, name: 'Bellingham' },
        ],
        fw: [
          { number: 11, name: 'Mbappe' },
          { number: 7, name: 'Vinicius' },
        ],
      },
      style: {
        color: "#ffffff",
        borderColor: "#333333",
        numberColor: "#333333",
        nameColor: "#ffffff",
      }
    },
  },
}

