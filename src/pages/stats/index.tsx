import React, { useReducer, useState } from 'react';
import { __prod__ } from '../../constants';
import { BrowserFilters } from '../../modules/stats/BrowserFilters';
import { MainLayout } from '../../common/layouts';
import  Table  from "./table";
import Pagination from "./pagination";
import { Player, usePlayerDataQuery} from '../../common/generated/graphql';

interface Action {
    filter: string;
    value: string | number | number[];
}

interface FilterState {
    search?: string;
    club?: string |undefined;
    position?: string |undefined;
    goalsScored?: number[] |undefined;
    assists?: number[];
}

function reducer(state: FilterState, action: Action) {
    switch (action.filter) {
        case 'search':
            return { ...state, search: action.value as string };
        case 'clubs':
            return { ...state, clubs: action.value as string };
        case 'positions':
            return { ...state, positions: action.value as string };
        case 'goalsScored':
            return { ...state, goalsScored: action.value as number[] };
        case 'assists':
            return { ...state, assists: action.value as number[] };
        default:
            return state;
    }
}

function Stats() {
    const [filters, dispatch] = useReducer(reducer, {});
    const [page,setPage] = useState(0);
    const { data, loading, error,fetchMore } = usePlayerDataQuery({
          variables: {
              limit:10,
             assists:!filters.assists?undefined:{min:filters.assists[0],max:filters.assists[1]},
             goalsScored:!filters.goalsScored?undefined:{min:filters.goalsScored[0],max:filters.goalsScored[1]}
                        },})
          let headings = ["First Name","Last Name","Goals Scored", "Assists","Ict Index","Minutes","Red Cards","Yellow Cards"]
          let players:Player[]= [];
          if(!loading)
          {
              if(data)
              {
                players = data.players.map((p) => 
                {
                    const { __typename, ...player } = p;
                    return player; 
                });
            }
          }
   
          let numberPlayers = players.length==0?0:players.length;
          
    return (
        <MainLayout>
            <div>
                {__prod__ && (
                    <pre className='w-full text-center'>
                        {JSON.stringify(filters)}
                    </pre>
                )}
                <BrowserFilters dispatchFilters={dispatch} />
                <br></br>
                 {!loading && data && <Table headings={headings} data={players}></Table>}
                 <Pagination setPage={setPage} totalPages={numberPlayers}></Pagination>
            </div>
        </MainLayout>
    );
}

export default Stats;
