import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const YoutubeStatistics = ({videoId}) => {
	console.log(videoId)
	const [statistics, setStatistics] = useState(null);

	const fetchVideoStatistics = async videoId => {
		// const url = `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`;

		try {
			// const response = await axios.get(url);
			// return response.data.items[0].statistics;
			return null
		} catch (error) {
			console.error('Error fetching video statistics:', error);
			return null;
		}
	};

	useEffect(() => {
		const fetchStatistics = async () => {
			const stats = await fetchVideoStatistics(videoId);
			console.log(stats)
			setStatistics(stats);
		};

		fetchStatistics();
	}, [videoId]);

	console.log(statistics)
	return (
		<>
			<div>{ <FontAwesomeIcon icon={faThumbsUp} />} Count: {statistics.viewCount}</div>
			<div>Like Count: {statistics.likeCount}</div>
			<div>Comment Count: {statistics.commentCount}</div>
		</>
	)
}

export default YoutubeStatistics