const Home = () => {
    return (
        <>
        <div id="home"> {/* for nav to scroll to top */}
            <p>.</p>
        </div>
            <header>
                <h1>Orleans Games</h1>
                <h2>Learn and play with fun</h2>
            </header>
            <main>
                <img src="../../public/images/assets/planetTopHalf.png" />
                <section id="new-games">
                    <div className="container">
                        <h2>New Games</h2>
                        <article class="games-container"> {/* KEEP A MAXIMUM OF 6 GAMES */}
                            <a class="game action">
                                <img src="../../public/images/assets/playBtn.png" alt="play" />
                                <img src="../../public/images/game-thumbnails/cosmolympics.png" alt="gameName" />
                            </a>
                            <a class="game puzzle">
                                <img src="../../public/images/assets/playBtn.png" alt="play" />
                                <img src="../../public/images/game-thumbnails/AnimalMaker.png" alt="gameName" />
                            </a>
                            <a class="game action">
                                <img src="../../public/images/assets/playBtn.png" alt="play" />
                                <img src="../../public/images/game-thumbnails/Butterflapp.png" alt="gameName" />
                            </a>
                            <a class="game action">
                                <img src="../../public/images/assets/playBtn.png" alt="play" />
                                <img src="../../public/images/game-thumbnails/KnockItDown.png" alt="gameName" />
                            </a>
                            <a class="game observe">
                                <img src="../../public/images/assets/playBtn.png" alt="play" />
                                <img src="../../public/images/game-thumbnails/MemoKidsAtSchool_Thumbnail.png" alt="gameName" />
                            </a>
                            <a class="game observe">
                                <img src="../../public/images/assets/playBtn.png" alt="play" />
                                <img src="../../public/images/game-thumbnails/CountingAnimalsWithSnowWhite.jpg.jpg" alt="gameName" />
                            </a>
                        </article>
                    </div>
                    <div className="planetBottom">
                        <a href="#">All Games</a>
                        <img src="../../public/images/assets/planetLowerHalf.png" />
                    </div>
                </section>
                <section id="about">
                    <article>
                        <h2>About Us</h2>
                        <p>Caramel is a Belgian publishing house specialized in the creation and packaging of edutainment books
                            for children</p>
                        <img src="../../public/images/assets/SpaceBillboard1.png" />
                    </article>
                    <article>
                        <h2>Who are we?</h2>
                        <p>As a certified B Corp, we are committed to producing high-quality, affordable resources that make
                            learning fun while upholding social and environmental responsibility.</p>
                        <img src="../../public/images/assets/SpaceBillboard2.png" />
                    </article>
                    <article>
                        <h2>Our goal</h2>
                        <p>As a certified B Corp, we are committed to producing high-quality, affordable resources that make
                            learning fun while upholding social and environmental responsibility.</p>
                        <img src="../../public/images/assets/SpaceBillboard3.png" />
                    </article>
                </section>
                <section id="contact">
                    <section id="contact-info">
                        <article>
                            <h2>Contact</h2>
                            <div>
                                <p>Email:</p>
                                <p>contact@orleansgames.com</p>
                                <p>Phone:</p>
                                <p>+32 489 53 61 20</p>
                                <p>Adress:</p>
                                <p>Jacques Georginlaan 2,<br /> 1030 Schaarbeek, België</p>
                            </div>
                        </article>
                        <img src="../../public/images/assets/location.png" />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.592076324211!2d4.405885876848284!3d50.857237757990816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c25d3c046031%3A0xc760cc5b59c7634f!2sCaramel%20Publishing!5e0!3m2!1sfr!2sbe!4v1740751863952!5m2!1sfr!2sbe&output=embed&zoom=15&disableDefaultUI=true" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                    <img src="../../public/images/assets/spaceship.png" />
                </section>
            </main>
        </>
    );
};

export default Home;

