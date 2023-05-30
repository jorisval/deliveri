import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import theme from '../utils/Variables';
import FooterBackground from '../../assets/images/footer-background-image.png';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const LayoutsStyle = createGlobalStyle`
    body {
        font-familly: ${theme.typography.primaryFontFamily};
        background-color: ${theme.colors.backgroundColor3};
    }
    p {
        font-size: 1rem;
    }
    h1, h2, h3 {
        font-familly: ${theme.typography.secondaryFontFamily};
    }
    .header {
        animation: ${fadeIn} 1s ease-in;
        display: flex;
        position: relative;
        justify-content: space-between;
        padding: 0 ${theme.layout.marginLeftRight};
        margin: -0.5rem;
        margin-bottom: 0;
        font-size: ${theme.typography.navFontSize};
        .menu-md {
                display: block;

            @media (min-width: ${theme.breakpoints.up.large}) {
                display: none;
            }

            &__icon {
                width: ${theme.layout.menuTabWidth};
                height: 40px;
                position: absolute;
                z-index: 100;
                top: 0px;
                left: calc(8% + 15px);
                padding-top: 18px;
                cursor: pointer;
                transition: all 0.6s ease-in-out;

            div {
                height: 2px;
                background-color: ${theme.colors.primary};
                display: block;
                margin: 4px;
                transition: all 0.6s ease-in-out;
            }

            &.active {
                left: calc(100vw - ${theme.layout.menuTabWidth});
                transition: all 600ms ease-in-out;
                background-color: ${theme.colors.paragraph};
                position: fixed;

                #icon-bar-one {
                transform: translateY(4px) rotate(-135deg);
                transition: all 0.6s ease-in-out;
                background-color: ${theme.colors.secondary};
                }

                #icon-bar-two {
                opacity: 0;
                transition: 0.4s ease;
                }

                #icon-bar-three {
                transform: translateY(-8px) rotate(-45deg);
                transition: all 0.6s ease-in-out;
                background-color: ${theme.colors.secondary};
                }
            }
            }

            &__hide {
            width: calc(100vw - ${theme.layout.menuTabWidth});
            left: calc(${theme.layout.menuTabWidth} - 100vw);
            height: 100vh;
            position: absolute;
            z-index: 10;
            top: 0px;
            transition: all 0.6s ease-in-out;

            li {
                height: 50px;
                list-style-type: none;
                text-align: center;
                line-height: 50px;
                transition: all 0.5s ease;

                &:hover {
                background-color: ${theme.colors.secondary};
                transition: all 0.5s ease;
                }
            }

            a {
                font-size: 1rem;
                padding: 30px 25px;
                text-decoration: none;
                color: ${theme.colors.white};
                
            }

            &.show {
                left: 0px;
                background-color: ${theme.colors.paragraph};
                transition: all 0.6s ease-in-out;
                position: fixed;
            }
            }
        }

        &__logo {
            margin-right: 0%;
            margin-left: 4%;
            padding: 20px;
            text-align: center;
            @media (min-width: ${theme.breakpoints.up.large}) {
                padding-left: 0;
                margin-right: 20%;
            }
            img {
                width: 80%;
                @media (min-width: ${theme.breakpoints.up.large}) {
                    width: 100%;
                }
            }
        }

        .nav-lg {
            display: none;
            font-size: 0.875rem;
            width: 47%;
            margin-right: 5%;
            @media (min-width: ${theme.breakpoints.up.large}) {
                display: block;
            }
            @media (min-width: ${theme.breakpoints.up.xlarge}) {
                font-size: 1rem;
            }

            ul {
            display: flex;
            list-style-type: none;
            margin: 0px;
            padding: 0px;
            }

            li {
                padding: 20px 4%;
                &.active {
                    a {
                        color: ${theme.colors.link};
                    }
                }
            }

            a {
                text-decoration: none;
                color: ${theme.colors.nav};
                white-space: nowrap;
                &:hover {
                    color: ${theme.colors.link};
                }
            }
        }

        &__button {
            padding: 17px 0;
            button {
                font-size: 0.625rem;
                padding: 0.5rem 0.75rem;
                white-space: nowrap;
                background-color: ${theme.colors.primary};
                .bi {
                    color: ${theme.colors.secondary};
                }
                .number {
                    white-space: nowrap;
                    @media (max-width: ${theme.breakpoints.down.large}) {
                        display: none;
                    }
                }
            }
        }
    }
    
    
    .footer {
        animation: ${fadeIn} 1s ease-in;
        padding-top: ${theme.layout.spaceBetween90};
        padding-bottom: 0.25rem;
        margin: 0 -0.5rem;
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        z-index: 19;
        position: relative;
        
        &-newsletter {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            position: relative;
            z-index: 20;
            width: 80%;
            margin: auto;
            color: ${theme.colors.white};
            background-color: ${theme.colors.secondary};
            padding: ${theme.layout.spaceBetween20};
            margin-top: 0;
            margin-bottom: -${theme.layout.spaceBetween90};
            h3 {
                color: ${theme.colors.white};
                margin: 0;
            }
            p {
                font-size: 0.875rem;
                font-weight: 300;
                margin: 0.5rem 0;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1rem;
                }
            }
            form {
                display: flex;
                width: 80%;
                justify-content: center;
            }

            input[type="email"] {
                font-size: 0.875rem;
                color: ${theme.colors.backgroundColor2};
                padding: 0.25rem 0.5rem;
                border: 2px ${theme.colors.button} solid;
                min-width: 90px;
                width: 65%;

                @media (min-width: ${theme.breakpoints.up.medium}) {
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                }
            }

            input[type="submit"] {
                font-size: 0.625rem;
                color: ${theme.colors.white};
                background-color: ${theme.colors.backgroundColor2};
                padding: 0.25rem 0.5rem;
                border: 1px ${theme.colors.backgroundColor2} solid;
                margin-left: 5px;

                @media (min-width: ${theme.breakpoints.up.medium}) {
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                }
            }
        }

        &__part-1 {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            padding: ${theme.layout.spaceBetween30} ${theme.layout.marginLeftRight};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                flex-direction: row;
            }
            div {
                width: 100%;
                margin-bottom: ${theme.layout.spaceBetween20};
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    width: 30%;
                }
                h2 {
                    color: ${theme.colors.white};
                }
                .separate {
                    width: 10%;
                    border: 1px solid ${theme.colors.secondary};
                }
                p {
                    font-size: 0.875rem;
                    font-weight: 300;
                    line-height: 1.5rem;
                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        font-size: 1rem;
                    }
                }
                img {
                    height: 40px;
                    max-width: 150px;
                }
            }
            img {
                width: 80%;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    width: 50%;
                }
            }
        }
        &__part-2 {
            display: flex;
            justify-content: center;
            font-size: 1rem;
            background: url(${FooterBackground}) center bottom / cover;
            margin-bottom: 0.5rem;
            padding: ${theme.layout.spaceBetween90} 0;
            padding-top: ${theme.layout.spaceBetween60};
            div {
                padding: 1rem;
                text-align: center;
            }
            p {
                font-size: 1rem;
                color: ${theme.colors.white};
                font-weight: 500;
                margin: 0.5rem 0;
            }
            span {
                font-size: 1.25rem;
                color: ${theme.colors.secondary};
                font-weight: 500;
                margin-bottom: 0.5rem;
            }

            ul {
                display: flex;
                justify-content: center;
                padding: 0;
            }

            li {
                display: flex;
                justify-content: center;
                align-items: center;
                list-style-type: none;
                margin: 0 0.25rem;
                width: 30px;
                height: 30px;
                border: 1px solid ${theme.colors.secondary};
                border-radius: 50%;
            }

            a {
                text-decoration: none;
                color: ${theme.colors.white};

                &:hover {
                    color: ${theme.colors.secondary};
                }
            }

            .bi-instagram, .bi-facebook, .bi-twitter {
                color: ${theme.colors.white};
            }
        }

        &__part-3 {
            font-size: 1rem;
            text-align: center;
            p {
                font-size: 0.875rem;
                font-weight: 300;
            }
        }
    }
`;

function StyledLayouts() {
    return <LayoutsStyle />
}

const shimmer = keyframes`
    0% {
        background-position: -40rem 0;
    }
    100% {
        background-position: 40rem 0;
    }
`;

const skeletonBackground = css`
    background-image: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 40rem 100%;
    animation: ${shimmer} 2s infinite;
`;

export const SkeletonImage = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 0.625rem;
    ${skeletonBackground}
`;

export const SkeletonText = styled.div`
    height: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 3px;
    ${skeletonBackground}
`;

export const SkeletonButton = styled.div`
    width: 100%;
    height: 2rem;
    margin-bottom: 0.5rem;
    border-radius: 3px;
    ${skeletonBackground}
`;

export const SkeletonOption = styled.div`
    width: 100%;
    height: 1rem;
    margin-left: 0.625rem;
    margin-bottom: 0.375rem;
    border-radius: 3px;
    ${skeletonBackground}
`;

export const SkeletonQuantity = styled.div`
    display: flex;
    align-items: center;

    & > div {
        height: 1.5rem;
        border-radius: 3px;
        ${skeletonBackground}

        &:first-child {
            width: 2.5rem;
            margin-right: 0.625rem;
        }

        &:nth-child(2) {
            width: 1rem;
            margin-right: 0.625rem;
        }

        &:last-child {
            width: 2.5rem;
        }
    }
`;

  
export default StyledLayouts;