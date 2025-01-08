import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <script src="/assets/js/libs/jquery.min.js"></script>
      <script src="/assets/js/libs/swiper-bundle.min.js"></script>
      <script src="/assets/js/libs/feather.min.js"></script>
      <script src="/assets/js/libs/typed.min.js"></script>
      <script src="/assets/js/libs/anime.min.js"></script>
      {/* <script src="/assets/js/app.js"></script> */}
      <script src="/assets/js/helpers/data-attr-helper.js"></script>
      <script src="/assets/js/helpers/swiper-helper.js"></script>
      <script src="/assets/js/helpers/typed-helper.js"></script>
      <script src="/assets/js/helpers/anime-helper.js"></script>
      {/* <script src="/assets/js/libs/uikit.min.js"></script> */}
      <script src="/assets/js/uikit-components.js"></script>
    </>
  );
}
