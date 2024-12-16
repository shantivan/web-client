import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

const CDN_URL: String = import.meta.env.VITE_CDN_URL;

function ImageCarousel() {
  return (
    <Carousel
      withIndicators
      loop
      height={200}
      align={"center"}
      controlSize={25}
      style={{ width: "100%" }}
    >
      <Carousel.Slide>
        <img
          src={`${CDN_URL}/farm-pics/Back of Structure - Rear view of property featuring a sunroom and a lawn.jpg`}
          alt="Back of Structure - Rear view of property featuring a sunroom and a lawn.jpg"
          style={{ width: "100%", height: "720px", objectFit: "cover" }}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src={`${CDN_URL}/farm-pics/IMG_0008.JPG`}
          alt={"Sukhi on tractor"}
          style={{ width: "100%", height: "720px", objectFit: "cover" }}
        />
      </Carousel.Slide>

      <Carousel.Slide>
        <img
          src={`${CDN_URL}/farm-pics/IMG_0223.JPG`}
          alt={"Sukhi"}
          style={{ width: "100%", height: "720px", objectFit: "cover" }}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src={`${CDN_URL}/farm-pics/IMG_0397.JPG`}
          alt={"Sukhi at sunset"}
          style={{ width: "100%", height: "720px", objectFit: "cover" }}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src={`${CDN_URL}/farm-pics/IMG_0714.JPG`}
          alt={"Sukhi farming"}
          style={{ width: "100%", height: "720px", objectFit: "cover" }}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src={`${CDN_URL}/farm-pics/IMG_0722.JPG`}
          alt={"Persimmon"}
          style={{ width: "100%", height: "720px", objectFit: "cover" }}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src={`${CDN_URL}/farm-pics/IMG_0731.JPG`}
          alt={"Sukhi + Suren"}
          style={{ width: "100%", height: "720px", objectFit: "cover" }}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src={`${CDN_URL}/farm-pics/IMG_7058.JPG`}
          alt={"Berries"}
          style={{ width: "100%", height: "720px", objectFit: "cover" }}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src={`${CDN_URL}/farm-pics/IMG_7059.JPG`}
          alt={"Berries"}
          style={{ width: "100%", height: "720px", objectFit: "cover" }}
        />
      </Carousel.Slide>
    </Carousel>
  );
}

export default ImageCarousel;
