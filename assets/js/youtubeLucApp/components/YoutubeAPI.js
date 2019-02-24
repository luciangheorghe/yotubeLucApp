import axios from 'axios';
const API_KEY = 'AIzaSyDINoVZF1uERv7i9nsC_LaIGZjqFCLC0SA';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	params: {
		part: 'snippet',
		maxResults: 10,
		key: API_KEY
	}
});
