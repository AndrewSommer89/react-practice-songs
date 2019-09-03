import {combineReducers} from 'redux';


const songsReducer = () => {
    return [
        {
            title: "No Scrubs",
            duration: '4:05'
        },
        {
            title: "Macarena",
            duration: "3:07"
        },
        {
            title: 'All For You',
            duration: "5:02"
        }
    ]
}

const selectedSongReducer = (selectedSong = null,action) => {
    if (action.type === "SONG_SELECTED"){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});