import React, {useState, useEffect} from 'react';
import { Row, Col, CardDeck, Container, Card, Button } from 'react-bootstrap'
import axios from 'axios';

import YoutubeStatistics from './YoutubeStatistics';
import './video.css'

const Videos = () => {

  const [nextPageToken, setNextPageToken] = useState('');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchYTVideos();
  }, []);


  const fetchYTVideos = () => {
    const channelId = 'UC_l620HNEbBOeASyPbQe_3Q';
    const apiKey = 'AIzaSyD6n5clvZCe0Q0PmcF-WUI64Ynrnkhiqqw';

    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&key=${apiKey}&maxResults=5${nextPageToken ? `&pageToken=${nextPageToken}` : ''}`;
    
    axios.get(url)
      .then(response => {
        setVideos(prevVideos => [...prevVideos, ...response.data.items]);
        setNextPageToken(response.data.nextPageToken || '');
      })
      .catch(error => {
        console.log(error);
      });
  }

  const redirectToYoutubeVideo = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className="pt-3 pb-3" id="videos">
      <div className="projectSection">
        <h1 className="text-center font-details-b pb-4">VIDEOS</h1>
        <Container>
          <CardDeck>
            <Row>
              {
                videos.map(item => {
                  // let item = videos[0];
                  let arr = ["project-body", "project-body-all"];
                  // if (item.name === "Linear Regression Visulaizer") {
                  //   arr[0] = "project-body-lr"
                  // }
                  // if (item.name === "Blockchain") {
                  //   arr[0] = "project-body-block"
                  // }
                  return (
                    <Col lg={4} md={6} sm={6} xs={12} className="individual-project" key={Math.random()}>
                        <Card>
                          <Card.Img style={{cursor: 'pointer'}} variant="top" src={item.snippet.thumbnails.default.url} className="project-image" onClick={() => redirectToYoutubeVideo(item.id.videoId)}/>
                          <Card.Body className={arr.join(" ")}>
                            <Card.Title>{item.snippet.title}</Card.Title>
                            <Card.Text>
                              {item.snippet.description.slice(0, 75).trim() + '...'}
                              {/* <YoutubeStatistics videoId={item.id.videoId}/> */}
                            </Card.Text>
                          </Card.Body>
                          {/* <Card.Footer>
                            <Row className="social-links align-items-start">
                              {item?.link && <a href={item.link} rel="noreferrer" target="_blank"><i className="fa fa-globe"></i></a>}
                              {item?.github && <a href={item.github} rel="noreferrer" target="_blank"><i className="fa fa-github"></i></a>}
                            </Row>
                          </Card.Footer> */}
                        </Card>
                    </Col>
                  )
                })
              }
            </Row>
            <Row className='videoFetchButton'>
              <Button variant='dark' className='videoButton' onClick={() => fetchYTVideos()}>
                Show More
              </Button>
            </Row>
          </CardDeck>
        </Container>
      </div>
    </div>
  )
}

export default Videos