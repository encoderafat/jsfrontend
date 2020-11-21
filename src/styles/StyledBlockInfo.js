import styled from 'styled-components';

export const StyledBlockInfo = styled.div`
background-size: cover !important;
background-position: center !important;
background: #000;
width: 100%;
padding: 40px 20px;
box-sizing: border-box;
animation: animateMovieinfo 1s;

  .blockinfo-content {
    max-width: 1280px;
    min-height: 450px;
    margin: 0 auto;
    background: rgb(0,168,230);
    border-radius: 20px;
    position: relative;

  }

  .blockinfo-text {
    font-family: Arial, Helvetica, sans-serif;
    padding: 40px;
    color: #fff;
    overflow: hidden;
    text-align: center;

    h1 {
      font-family: 'Abel', sans-serif;
      font-size: 48px;
      margin: 0;

      @media screen and (max-width: 1000px) {
        font-size: 32px !important;
      }
    }

    h2 {
        font-size: 24px;
        line-height: 0;
        margin-top: 50px;
      }

    h3 {
      font-size: 16px;
      line-height: 0;
      margin-top: 30px;
    }

    p {
      font-family: 'Abel', sans-serif;
      font-size: 18px;
      line-height: 26px;
    }
  }

  .blockinfo-search {
    justify-content: center;
  }

  .blockinfo-controls {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }


  @media screen and (max-width: 768px) {
    min-height: 600px;
    height: auto;
  }

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
