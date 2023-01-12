const speakerSection = document.querySelector('#mobile_skpeakers');
const contents = `
<div class="row">
    <div class="col-12">
        <center>
            <h2>Featured speakers</h2>
        </center>
    </div>
</div>

<div class="row speakers_cards">
    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="col-4 speakers">
                    <img src="./images/speaker_01.jpeg" alt="">
                </div>
                <div class="col-8">
                    <p>
                        <span class="name">yohai benkler</span>
                        <br>
                        <span class="proffesionalism">
                            professor at Harvard Law School
                        </span>
                        <br> Focusing on a collaborative approach in a networked environment, he created the
                        concept of co-production based on sharing, such as open source software and Wikipedia.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="col-4 speakers">
                    <img src="./images/images/w_speaker_02.jpeg" alt="">
                </div>
                <div class="col-8">
                    <p>
                        <span class="name">yohai benkler</span>
                        <br>
                        <span class="proffesionalism">
                            professor at Harvard Law School
                        </span>
                        <br> Focusing on a collaborative approach in a networked environment, he created the
                        concept of co-production based on sharing, such as open source software and Wikipedia.</p>
                </div>
            </div>
        </div>
    </div>

    <!--Hiden speakers section in Mobile version-->
    <div class="row">
        <div class="col-1"></div>
        <div class="col-11" id="click_more">
            <p class="more_button">show More </p>
        </div>
    </div>
    <!--Hiden speakers section in Mobile version-->

    <section class="hiden">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-4 speakers">
                        <img src="./images/images/w_speaker_07.jpg" alt="">
                    </div>
                    <div class="col-8">
                        <p>
                            <span class="name">yohai benkler</span>
                            <br>
                            <span class="proffesionalism">
                                professor at Harvard Law School
                            </span>
                            <br> Focusing on a collaborative approach in a networked environment, he created
                            the concept of co-production based on sharing, such as open source software and
                            Wikipedia.</p>
                    </div>
                </div>
            </div>
        </div>



        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-4 speakers">
                        <img src="./images/images/speaker_04.jpeg" alt="">
                    </div>
                    <div class="col-8">
                        <p>
                            <span class="name">yohai benkler</span>
                            <br>
                            <span class="proffesionalism">
                                professor at Harvard Law School
                            </span>
                            <br> Focusing on a collaborative approach in a networked environment, he created
                            the concept of co-production based on sharing, such as open source software and
                            Wikipedia.</p>
                    </div>
                </div>
            </div>
        </div>


        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-4 speakers">
                        <img src="./images/images/speaker_05.jpeg" alt="">
                    </div>
                    <div class="col-8">
                        <p>
                            <span class="name">yohai benkler</span>
                            <br>
                            <span class="proffesionalism">
                                professor at Harvard Law School
                            </span>
                            <br> Focusing on a collaborative approach in a networked environment, he created
                            the concept of co-production based on sharing, such as open source software and
                            Wikipedia.</p>
                    </div>
                </div>
            </div>
        </div>



        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-4 speakers">
                        <img src="./images/images/speaker_06.jpeg" alt="">
                    </div>
                    <div class="col-8">
                        <p>
                            <span class="name">yohai benkler</span>
                            <br>
                            <span class="proffesionalism">
                                professor at Harvard Law School
                            </span>
                            <br> Focusing on a collaborative approach in a networked environment, he created
                            the concept of co-production based on sharing, such as open source software and
                            Wikipedia.</p>
                    </div>
                </div>
            </div>
        </div>
        <!--Hiden speakers section in Mobile version-->

        <div class="row">

            <div class="col-8" id="click_less">
                <p class="more_button">show less </p>
            </div>
        </div>`;
speakerSection.innerHTML += contents;