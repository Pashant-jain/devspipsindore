import React from "react";
import style from "./style.module.scss";

import SearchIcon from "/public/assets/icons/Search.svg";
import arrowRight from "/public/assets/icons/Arrow-right.svg";
import SpipsVideo from '/public/assets/video/spips.mp4'

import Image from "next/image";
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
} from "react-bootstrap";

const Banner = ({ isFrontBanner, bannerImg,heading,description }) => {
  return (
    <>
      {isFrontBanner ? (
        <div className={style['front_banner_main']} >
        <video class={style['bg-video']} playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"><source src={SpipsVideo} type="video/mp4" /></video>

        <div className={style["front_banner_wrp"]}>
          <div className="container h-100">
            <div className={style["front_banner_inner"]}>
              <div className={style["bannner_content"]}>
                <span>We are the leaders</span>
                <h1 className="heading-1">
                  Discover the key<br/> to grow your business
                </h1>
                <p className="text-regular">
                  Lorem ipsum dolor sit amet consectetur adipiscing elidolor
                  mattis sit<br/> phasellus mollis sit aliquam sit nullam neques.
                </p>
                <Form>
                  <div class={`front_banner_form ${style["front_banner_form"]}`} >
                  <InputGroup className="w-100">
                    <InputGroup.Text className="p-0" >
                      <Image src={SearchIcon} alt="" width={24} height={24} />
                    </InputGroup.Text>

                    <Form.Control
                      placeholder="Search Courses"
                      className="text-regular"
                    />
                  </InputGroup>
                  <InputGroup className="w-100">
                    <InputGroup.Text className="p-0" >
                      <Image src={SearchIcon} alt="" width={24} height={24} />
                    </InputGroup.Text>
                    <DropdownButton
                      variant="outline-secondary"
                      title="Category"
                      id="input-group-dropdown-1"
                      className="text-regular "
                    >
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Item href="#">Another action</Dropdown.Item>
                      <Dropdown.Item href="#">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                  <Button type="submit" variant="secondary" className="w-100">
                    Search Course{" "}
                    <Image src={arrowRight} alt="" width={8} height={8} />
                  </Button>
                  </div>
                </Form>
              </div>
              <div>
                  {/* <Image
                    src={bannerImg}
                    alt="Banner Img"
                    loading="lazy"
                    width={700}
                    height={700}
                  /> */}
              </div>
            </div>
          </div>
        </div>
        </div>
      ) : (
        <div
          className={`${style["Banner_wrp"]} Banner_wrp`}
          style={{ backgroundImage: `url(${bannerImg.src})` }}
        >
          <div className={style["Banner_overlay"]}>
            <div className="container">
              <div className={style["Banner_inner"]}>
                <div className="w-100"></div>
                <div className={`w-75 ps-5 ${style["bannner_content"]}`}>
                  <h1 className="heading-1" >{heading}</h1>
                  <p className="text-regular my-4" >{description}</p>
                  <Button type="submit" variant="secondary" >
                  Contact Us
                    <Image src={arrowRight} alt="" width={8} height={8} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
