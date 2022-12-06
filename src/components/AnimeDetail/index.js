import { Card, Row, Col, Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "./index.css"
import HeaderBar from "../Header";

const AnimeDetail = () => {
    const params = useParams();
    const [animeInfo, setAnimeDetail] = useState([]);
    const [animeImage, setAnimeImage] = useState([]);
    const [animeTrailer, setAnimeTrailer] = useState([]);
    const [animeGenre, setAnimeGenre] = useState([]);
    const [animeStreaming, setAnimeStream] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://api.jikan.moe/v4/anime/${params.id}/full`)
            const animeData = await response.json()
            setAnimeDetail(animeData.data)
            setAnimeImage(animeData.data.images.jpg)
            setAnimeTrailer(animeData.data.trailer)
            setAnimeGenre(animeData.data.genres)
            setAnimeStream(animeData.data.streaming)
            console.log(animeData);
        }
        fetchData()
    }, [])


    return (
        <>

            <HeaderBar />
            <Container>
                <Row>
                    <Col>
                        <span className="title">
                            {animeInfo.title}
                        </span> <br />
                        <span className="fw-bold">
                            {animeInfo.title_japanese}
                        </span> <br />
                        <span>
                            {animeInfo.type} . {animeInfo.duration} . Episodes {animeInfo.episodes}
                        </span>
                    </Col>
                </Row>

                <Row className="mt-3 photo-section">
                    <Col>
                        <img height="320" src={animeImage.image_url} />
                    </Col>
                    <Col className="video-responsive">
                        <iframe
                            src={animeTrailer.embed_url}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </Col>
                </Row>

                <div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
                    <div class="card-body">
                        {animeGenre.map((genre, a) => (
                            <span class="card-link badge rounded-pill bg-dark card-title">{genre.name}</span>
                        ))}
                        <p class="card-text">{animeInfo.synopsis}</p>
                        {animeStreaming.map((stream, a) => (
                            <a href={stream.url} class="card-link"><img width="30" height="30" src={"../../images/" + stream.name + ".png"} /></a>

                        ))}
                    </div>
                </div>
            </Container>
        </>
    )
}
export default AnimeDetail;

