import React from 'react'
import Content from './Content'
import Particles from "react-tsparticles";

import '../../styles/Intro.scss'

const Intro = () => {

  const particlesInit = (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const particleOptions = {
    "background": {
      "color": {
        "value": "transparent"
      },
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "20%"
    },
    "fullScreen": {
      "enable": false,
      "zIndex": 1
    },
    "interactivity": {
      "events": {
        "onClick": {
          "mode": "repulse"
        },
        "onHover": {
          "enable": true,
          "mode": "circle",
          "parallax": {
            "enable": true,
            "force": 10,
            "smooth": 200
          }
        }
      },
      "modes": {
        "bubble": {
          "distance": 250,
          "duration": 2,
          "opacity": 0,
          "size": 0
        },
        "grab": {
          "distance": 400
        },
        "repulse": {
          "distance": 400
        }
      }
    },
    "motion": {
      "reduce": {
        "factor": 2
      }
    },
    "particles": {
      "color": {
        "value": "#1E2832"
      },
      "links": {
        "color": {
          "value": "#1E2832"
        },
        "consent": true,
        "enable": true,
        "frequency": 0.7,
        "opacity": 0.9,
        "warp": true
      },
      "move": {
        "attract": {
          "rotate": {
            "x": 600,
            "y": 600
          }
        },
        "enable": true,
        "gravity": {
          "maxSpeed": 20
        },
        "path": {},
        "outModes": {
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "random": true,
        "speed": 1,
        "spin": {}
      },
      "number": {
        "density": {
          "enable": true
        },
        "value": 160
      },
      "opacity": {
        "random": {
          "enable": true
        },
        "value": {
          "min": 0,
          "max": 1
        },
        "animation": {
          "enable": true,
          "speed": 0.8,
          "minimumValue": 0
        }
      },
      "size": {
        "random": {
          "enable": true
        },
        "value": {
          "min": 1,
          "max": 3
        },
        "animation": {
          "speed": 2,
          "minimumValue": 0.3
        }
      }
    }
  }

  return (
    <section id="hero">
      <Particles
        id="tsparticles"
        className='particlesWrapper'
        canvasClassName='particlesCanvas'
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
      />
      <Content fontColor='light' />

      <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 " preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="wave1">
          <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
        </g>
        <g className="wave2">
          <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
        </g>
      </svg>

    </section>
  )
}

export default Intro