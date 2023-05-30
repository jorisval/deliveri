import styled, { keyframes } from 'styled-components';
import theme from '../utils/Variables';
import HeroBackground from '../../assets/images/deliveri-hero-image.png';
import HowBackground from '../../assets/images/how-section-background-image-2.png';
import ReviewsBackground from '../../assets/images/reviews-section-background-image.png';


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const HomeContainer = styled.div`
animation: ${fadeIn} 1s ease-in;
body {
    background-color: ${theme.colors.backgroundColor3};
}
.hero {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    height: 70vh;
    background: url(${HeroBackground}) center bottom / cover;
    background-color: ${theme.colors.backgroundColor1};
    margin: 0 -0.5rem;
    padding-bottom: ${theme.layout.spaceBetween90};
    @media (min-width: ${theme.breakpoints.up.large}) {
        flex-direction: row;
        justify-content: space-between;
        margin: 0 -8px;
    }
    &__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(86,63,79,0.80);
        @media (min-width: ${theme.breakpoints.up.large}) {
            display:none;
        }

    }
    &__text {
        border-radius: 0.5rem;
        padding: 0.5rem;
        z-index: 2;
        width: 80%;
        margin: auto;
        
        @media (min-width: ${theme.breakpoints.up.large}) {
            padding-top: ${theme.layout.spaceBetween90};
            margin: 0 0 0 ${theme.layout.marginLeftRight};
            width: 40%;
            max-width: 33rem;
            text-align: unset;
            border-radius: 0;
        }
        h1 {
            color: ${theme.colors.white};
            font-familly: ${theme.typography.secondaryFontFamily};
            font-size: 1.5rem;
            line-height: 2rem;
            margin-bottom: ${theme.layout.spaceBetween30};
            @media (min-width: ${theme.breakpoints.up.large}) {
                font-size: 2.375rem;
                line-height: 3.2rem;
                text-align: left;
            }
        }
        .subtitle {
            color: ${theme.colors.white};
            font-size: 1rem;
            line-height: 1.625rem;
            font-weight: 200;
            list-style-type: none;
            padding-left: 0;
            margin-bottom: ${theme.layout.spaceBetween30};
            @media (min-width: ${theme.breakpoints.up.large}) {
                text-align: left;
            }
            .bi {
                color: ${theme.colors.secondary}; 
            }
        }   

    }
}
.steps-section {
    width: 80%;
    margin: auto;
    text-align: center;
    margin-top: -${theme.layout.spaceBetween90};
    position: relative;
    z-index: 9;
    padding: ${theme.layout.spaceBetween20};
    background-color: ${theme.colors.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.25);
    @media (min-width: ${theme.breakpoints.up.medium}) {
        width: 60%;
    }
    h2 {
        font-weight: bold;
        color: ${theme.colors.titleH2};
        margin-bottom: ${theme.layout.spaceBetween30};
    }
    .steps {
        display: flex;
        justify-content: space-between;
        .step {
            width: 20%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                width: 30%;
            }
            .order {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 30px;
                height: 30px;
                font-size: 1.125rem;
                border-radius: 50%;
                color: ${theme.colors.white};
                background-color: ${theme.colors.primary};
                border: 4px solid ${theme.colors.white};
                box-shadow: 0 0 10px ${theme.colors.primary};
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    width: 50px;
                    height: 50px;
                    font-size: 1.5rem;
                }
            }
            p {
                font-size: 1rem;
                color: ${theme.colors.paragraph}
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1.25rem;
                }
            }
        }
    }
}
.services-section {
    margin: 0 -0.5rem;
    padding-top: ${theme.layout.spaceBetween60};
    &__header {
        text-align: center;
        margin: auto;
        width: 80%;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 40%;
        }
        h2 {
            font-family: ${theme.typography.secondaryFontFamily};
            font-size: 1.75rem;
            line-height: 1.75rem;
            color: ${theme.colors.titleH2};
            margin-top: 0.5rem;
            margin-bottom: 1rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                margin-top: 1.25rem;
                font-size: 2.5rem;
            }
        }
        .separate-line {
            width: 30px;
            margin: auto;
            border: 1px solid ${theme.colors.secondary};
        }
        p {
            font-size: 1rem;
            color: ${theme.colors.paragraph};
            font-weight: 300;
            line-height: 1.25rem;
        }
    }
    .services {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: ${theme.layout.spaceBetween60};
        padding-bottom: ${theme.layout.spaceBetween60};
        position: relative;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            margin-top: 1.25rem;
            font-size: 2.5rem;
            padding: 0 ${theme.layout.marginLeftRight};
        }
        .service {
            min-width: 150px;
            width: 30%;
            box-sizing: border-box; 
            padding: ${theme.layout.spaceBetween30};
            margin: auto;
            margin-bottom: 10px;
            text-align: center;
            background-color: ${theme.colors.white};
            box-shadow: 4px 4px 4px rgba(0,0,0,0.1);
            
            z-index: 5;
            img {
                @media (max-width: ${theme.breakpoints.down.small}) {
                    width: 50px;
                    height: 50px;
                }
            }
            h3 {
                font-family: ${theme.typography.secondaryFontFamily};
                font-size: 1.125rem;
                font-weight: bold;
                line-height: 1.25rem;
                margin-top: 0.625rem;
                margin-bottom: 0.625rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1.25rem;
                }   
            }
            p {
                font-size: 0.875rem;
                line-height: 1.25rem;
                font-weight: 200;
                margin-bottom: 1.25rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1rem;
                    line-height: 1.375rem;
                } 
            }
        }
        &__background {
            position: absolute;
            z-index: 4;
            width: 100%;
            height: 60%;
            left: 0;
            bottom: 0;
            background-color: ${theme.colors.backgroundColor3};
        }
    }
}

.tracking-section, .same-day-section {
    margin: 0 -0.5rem;
    padding: ${theme.layout.spaceBetween60} ${theme.layout.marginLeftRight};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.backgroundColor3};
    @media (min-width: ${theme.breakpoints.up.medium}) {
        flex-direction: row;
    }
    &__image {
        width: 100%;
        margin-bottom: ${theme.layout.spaceBetween20};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 50%;
            max-width: 43.75rem;
        }
        img {
            width: 100%;
        }
    }
    &__text {
        width: 100%;
        box-sizing: border-box;
        text-align: center;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 40%;
            text-align: left;
        }
        h2 {
            font-family: ${theme.typography.secondaryFontFamily};
            font-size: 1.75rem;
            line-height: 1.75rem;
            color: ${theme.colors.titleH2};
            margin-top: 0.5rem;
            margin-bottom: 0.625rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                margin-top: 1.25rem;
                font-size: 2.5rem;
                line-height: 3rem;
            }
        }
        .separate-line {
            width: 30px;
            margin: auto;
            border: 1px solid ${theme.colors.secondary};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                margin: 0;
            }
        }
        p {
            font-size: 1rem;
            color: ${theme.colors.paragraph};
            font-weight: 200;
            line-height: 1.25rem;
        }
    }
}

.how-section {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    background: url(${HowBackground}) center bottom / cover;
    background-color: ${theme.colors.backgroundColor1};
    margin: 0 -0.5rem;
    padding: 0 0 ${theme.layout.spaceBetween60} 0;
    @media (min-width: ${theme.breakpoints.up.large}) {
        padding: 0 0 ${theme.layout.spaceBetween90} 0;
    }
    .call-fast {
        display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            position: relative;
            z-index: 4;
            width: 80%;
            margin: auto;
            color: ${theme.colors.titleH2};
            background-color: ${theme.colors.white};
            padding: ${theme.layout.spaceBetween20};
            margin-top: -${theme.layout.spaceBetween60};
            margin-bottom: ${theme.layout.spaceBetween60};
            img {
                max-width: 30px;
                max-height: 30px;
                @media (min-width: ${theme.breakpoints.up.large}) {
                    max-width: 60px;
                    max-height: 60px;
                }
            }
            p {
                font-size: 0.875rem;
                font-weight: 500;
                margin: 0.5rem 0;
                margin-left: 0.5rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1rem;
                }
                span {
                    color: ${theme.colors.secondary};
                }
            }
    }
    &__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(86,63,79,0.80);
        @media (min-width: ${theme.breakpoints.up.large}) {
            display:none;
        }

    }
    &__text {
        z-index: 2;
        width: 80%;
        margin: auto;
        @media (min-width: ${theme.breakpoints.up.large}) {
            margin: 0 0 0 ${theme.layout.marginLeftRight};
            width: 40%;
        }
        h2 {
            color: ${theme.colors.white};
            font-familly: ${theme.typography.secondaryFontFamily};
            font-size: 1.5rem;
            line-height: 2rem;
            margin-bottom: ${theme.layout.spaceBetween30};
            @media (min-width: ${theme.breakpoints.up.large}) {
                font-size: 2.375rem;
                line-height: 3.2rem;
                text-align: left;
            }
        }
        .how-it-works {
            display: flex;
            flex-direction: column;
            padding-left: 0;
            margin-bottom: ${theme.layout.spaceBetween30};
            &__first, &__second, &__third {
                display: flex;
                justify-content: space-between;
                color: ${theme.colors.white};
                line-height: 1.625rem;
                font-weight: 200;
                margin-bottom: 1rem;
                .bi {
                    font-size: 0.875rem;
                    width: 30px;
                    height: 30px;
                    border: 1px solid ${theme.colors.secondary};
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .content {
                    margin-left: 0.5rem;
                }
                p {
                    margin-top: 0;
                }
                h4 {
                    font-weight: 400;
                    margin-top: 0;
                    margin-bottom: 0.25rem;
                }
            }
        }   

    }
}
.payments-section {
    margin: 0 -0.5rem;
    padding-top: ${theme.layout.spaceBetween60};
    &__header {
        text-align: center;
        margin: auto;
        width: 80%;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 40%;
        }
        h2 {
            font-family: ${theme.typography.secondaryFontFamily};
            font-size: 1.75rem;
            line-height: 1.75rem;
            color: ${theme.colors.titleH2};
            margin-top: 0.5rem;
            margin-bottom: 1rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                margin-top: 1.25rem;
                font-size: 2.5rem;
            }
        }
        .separate-line {
            width: 30px;
            margin: auto;
            border: 1px solid ${theme.colors.secondary};
        }
        p {
            font-size: 1rem;
            color: ${theme.colors.paragraph};
            font-weight: 300;
            line-height: 1.25rem;
        }
    }
    .payments {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: ${theme.layout.spaceBetween60};
        padding-bottom: ${theme.layout.spaceBetween60};
        position: relative;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            margin-top: 1.25rem;
            font-size: 2.5rem;
            padding: 0 ${theme.layout.marginLeftRight};
        }
        .payment {
            min-width: 150px;
            width: 30%;
            box-sizing: border-box; 
            padding: ${theme.layout.spaceBetween30};
            margin: auto;
            margin-bottom: 10px;
            text-align: center;
            background-color: ${theme.colors.white};
            box-shadow: 4px 4px 4px rgba(0,0,0,0.1);
            z-index: 5;
            h3 {
                font-family: ${theme.typography.secondaryFontFamily};
                font-size: 1.125rem;
                font-weight: bold;
                line-height: 1.25rem;
                margin-top: 0.625rem;
                margin-bottom: 0.625rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1.25rem;
                }   
            }
            .price {
                font-size: 1.5rem;
                color: ${theme.colors.button};
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 2rem;
                }
            }
            p {
                font-size: 0.875rem;
                line-height: 1.25rem;
                font-weight: 200;
                margin-top: 0.625rem;
                margin-bottom: 0.625rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1rem;
                    line-height: 1.375rem;
                } 
            }
        }
        &__background {
            position: absolute;
            z-index: 4;
            width: 100%;
            height: 60%;
            left: 0;
            bottom: 0;
            background-color: ${theme.colors.backgroundColor1};
        }
    }
}
.reviews-section {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    background: url(${ReviewsBackground}) center bottom / cover;
    background-color: ${theme.colors.backgroundColor1};
    margin: 0 -0.5rem;
    padding: ${theme.layout.spaceBetween60} 0;
    @media (min-width: ${theme.breakpoints.up.large}) {
        padding: ${theme.layout.spaceBetween90} 0;
    }
    .Customer {
        &-reviews {
            width: 90%;
            margin: auto;
            position: relative;
            box-sizing: border-box;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                width: 50%;
            }
            .bi-chevron-left {
                position: absolute;
                left: 0;
                top: 45%;
                color: ${theme.colors.white};
                font-size: 2rem;
                cursor: pointer;
                z-index: 5;
            }
            .bi-chevron-right {
                position: absolute;
                right: 0;
                top: 45%;
                color: ${theme.colors.white};
                font-size: 2rem;
                cursor: pointer;
                z-index: 5;
            }
        }
        &-review {
            display: none;
            z-index: 4;
            animation: ${fadeIn} 0.5s ease-in;
            margin-bottom: ${theme.layout.spaceBetween30};
            text-align: center;
            &__image {
                width: 40px;
                height: 40px;
                margin-bottom: ${theme.layout.spaceBetween10};
                border-radius: 5px;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    width: 50px;
                    height: 50px;
                }
            }
            p {
                width: 70%;
                color: ${theme.colors.white};
                font-size: 1rem;
                font-weight: 200;
                line-height: 1.625rem;
                margin: auto;
                margin-bottom: ${theme.layout.spaceBetween20};
            }
            &__name {
                color: ${theme.colors.white};
                font-size: 1rem;
                font-weight: 400;
                margin-bottom: ${theme.layout.spaceBetween10};
            }
            &.active {
                display: block;
            }
        }
    }
    .review {
        &-circles {
            display: flex;
            justify-content: center;
        }
        &-circle {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background-color: ${theme.colors.white};
            margin-right: 4px;
            cursor: pointer;
            &.active {
                background-color: ${theme.colors.secondary};
            }
        }
    }
}
.partners-section {
    margin: 0 -0.5rem;
    padding: ${theme.layout.spaceBetween60} ${theme.layout.marginLeftRight};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: ${theme.colors.backgroundColor3};
    &__image {
        margin-bottom: ${theme.layout.spaceBetween20};
        margin-right: 0.5rem;
        display: flex;
        justify-content: center;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 22%;
        }
        img {
            width: 80px;
            height: 80px;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                width: 150px;
                height: 150px;
            }
        }
    }
}

`;