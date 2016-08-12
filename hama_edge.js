/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            '微软雅黑': '',
            '微软雅黑, \'Segoe UI\'': '',
            '\'Microsoft Yahei UI light\', \'Microsoft Yahei UI\', \'Segoe UI\'': ''        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"hama.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'pond',
                            symbolName: 'pond',
                            type: 'rect',
                            rect: ['-15px', '527px', '1014', '249', 'auto', 'auto'],
                            transform: [[],[],[],['1.06426','1.06426']]
                        },
                        {
                            id: 'leaf',
                            type: 'image',
                            rect: ['-24px', '589px', '346px', '147px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"leaf.svg",'0px','0px']
                        },
                        {
                            id: 'hama',
                            symbolName: 'hama',
                            type: 'rect',
                            rect: ['-30px', '469px', '330', '250', 'auto', 'auto'],
                            transform: [[],[],[],['0.672','0.672']]
                        },
                        {
                            id: 'bubble',
                            type: 'image',
                            rect: ['196px', '399px', '282px', '120px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"bubble.svg",'0px','0px']
                        },
                        {
                            id: 'wrr',
                            type: 'text',
                            rect: ['205px', '409px', '268px', '78px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: 0,
                            text: "Wrr",
                            align: "left",
                            font: ['\'Microsoft Yahei UI light\', \'Microsoft Yahei UI\', \'Segoe UI\'', [20, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'path',
                            symbolName: 'path',
                            type: 'rect',
                            rect: ['78px', '454px', '30', '21', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '792px', '736px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 5055,
                    autoPlay: true,
                    labels: {
                        "start": 0,
                        "wr": 500,
                        "bb": 1000
                    },
                    data: [
                        [
                            "eid108",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pond}",
                            '527px',
                            '527px'
                        ],
                        [
                            "eid83",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bubble}",
                            '399px',
                            '399px'
                        ],
                        [
                            "eid107",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pond}",
                            '-15px',
                            '-15px'
                        ],
                        [
                            "eid102",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${pond}",
                            '1.06426',
                            '1.06426'
                        ],
                        [
                            "eid38",
                            "opacity",
                            1000,
                            170,
                            "linear",
                            "${bubble}",
                            '0',
                            '1'
                        ],
                        [
                            "eid78",
                            "left",
                            0,
                            0,
                            "linear",
                            "${hama}",
                            '-30px',
                            '-30px'
                        ],
                        [
                            "eid87",
                            "left",
                            0,
                            0,
                            "linear",
                            "${path}",
                            '78px',
                            '78px'
                        ],
                        [
                            "eid101",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${pond}",
                            '1.06426',
                            '1.06426'
                        ],
                        [
                            "eid74",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${hama}",
                            '0.672',
                            '0.672'
                        ],
                        [
                            "eid82",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bubble}",
                            '196px',
                            '196px'
                        ],
                        [
                            "eid39",
                            "opacity",
                            1170,
                            190,
                            "linear",
                            "${wrr}",
                            '0',
                            '1'
                        ],
                        [
                            "eid80",
                            "left",
                            0,
                            0,
                            "linear",
                            "${wrr}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid86",
                            "top",
                            0,
                            0,
                            "linear",
                            "${path}",
                            '454px',
                            '454px'
                        ],
                        [
                            "eid81",
                            "top",
                            0,
                            0,
                            "linear",
                            "${wrr}",
                            '409px',
                            '409px'
                        ],
                        [
                            "eid75",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${hama}",
                            '0.672',
                            '0.672'
                        ],
                        [
                            "eid79",
                            "top",
                            0,
                            0,
                            "linear",
                            "${hama}",
                            '469px',
                            '469px'
                        ]
                    ]
                }
            },
            "hama": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'breath',
                            rect: ['108px', '41px', '157px', '118px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/breath.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'zhangzhe',
                            rect: ['0px', '0px', '330px', '250px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hama.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '330px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid51",
                            "left",
                            0,
                            200,
                            "linear",
                            "${breath}",
                            '108px',
                            '145px'
                        ],
                        [
                            "eid57",
                            "left",
                            200,
                            50,
                            "linear",
                            "${breath}",
                            '145px',
                            '142px'
                        ],
                        [
                            "eid55",
                            "left",
                            250,
                            250,
                            "linear",
                            "${breath}",
                            '142px',
                            '108px'
                        ],
                        [
                            "eid58",
                            "top",
                            0,
                            200,
                            "linear",
                            "${breath}",
                            '41px',
                            '45px'
                        ],
                        [
                            "eid59",
                            "top",
                            200,
                            50,
                            "linear",
                            "${breath}",
                            '45px',
                            '44px'
                        ],
                        [
                            "eid61",
                            "top",
                            250,
                            250,
                            "linear",
                            "${breath}",
                            '44px',
                            '41px'
                        ]
                    ]
                }
            },
            "fly": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'wingL',
                            rect: ['0px', '0px', '12px', '18px', 'auto', 'auto'],
                            transform: [[], [], [], [], ['82%', '79%']],
                            fill: ['rgba(0,0,0,0)', 'images/wing.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'body',
                            rect: ['5px', '11px', '13px', '10px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/body.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'wing2',
                            rect: ['13px', '2px', '11px', '15px', 'auto', 'auto'],
                            transform: [[], [], [], [], ['23%', '86%']],
                            fill: ['rgba(0,0,0,0)', 'images/wing2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '30px', '21px']
                        }
                    }
                },
                timeline: {
                    duration: 175,
                    autoPlay: true,
                    labels: {
                        "f": 0
                    },
                    data: [
                        [
                            "eid44",
                            "rotateZ",
                            0,
                            75,
                            "linear",
                            "${wing2}",
                            '0deg',
                            '108deg'
                        ],
                        [
                            "eid47",
                            "rotateZ",
                            75,
                            100,
                            "linear",
                            "${wing2}",
                            '108deg',
                            '0deg'
                        ],
                        [
                            "eid45",
                            "rotateZ",
                            0,
                            75,
                            "linear",
                            "${wingL}",
                            '0deg',
                            '-77deg'
                        ],
                        [
                            "eid46",
                            "rotateZ",
                            75,
                            100,
                            "linear",
                            "${wingL}",
                            '-77deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "path": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'fly',
                            symbolName: 'fly',
                            autoOrient: false,
                            rect: ['0px', '0px', '30', '21', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '30px', '21px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "path": 0
                    },
                    data: [
                        [
                            "eid65",
                            "location",
                            0,
                            5000,
                            "linear",
                            "${fly}",
                            [[15, 10.5, 0, 0, 0, 0,0],[69.66, -49.93, -293.86, 41.38, -141.6, 19.94,103.32],[56.47, -74.84, 36.05, 41.74, 87.88, 101.74,220.79],[66.42, 4.15, 78.86, 12.2, 80.2, 12.41,305.93],[115.24, -68.85, 73.36, -55.21, 95.23, -71.67,398.44],[174.18, -22.86, 157.77, -114.05, 72.45, -52.37,483.88],[229.92, -177.47, -1.66, 0.44, -150.35, 39.48,676.44],[206.85, -145.92, 77.97, 38.31, 37.91, 18.63,719.81],[356.38, -55.41, -12.7, 22.18, -166.4, 290.65,937.09],[289.99, -60.36, 30.4, -72.62, 13.68, -32.68,1007.54],[392.91, -84.16, 29.85, 94.97, 43.24, 137.61,1133.89],[429.67, -109.35, -18.9, -75.77, -0.34, -1.35,1193.43],[422.57, -81.32, 73.46, 39.67, 99.61, 53.79,1255.13],[544.33, -72.72, 142.62, 23.22, 13.85, 2.26,1377.85],[498.69, -106.35, -51.49, 56.75, -126.67, 139.64,1491.19],[367.69, 2.31, -84.04, 184.85, -34.68, 76.27,1662.02],[417.34, -14.75, 3.85, -213.04, 5.08, -281.38,1805.52],[317.67, -106.29, 17.28, 130.25, 35.66, 268.79,2006.62],[378.19, -185.46, -44.02, -18.45, -102.06, -42.78,2138.49],[254.97, -39.95, -33.17, 69.65, -64.33, 135.08,2331.87],[199.93, -84.22, -14.34, 63.98, -96.5, 430.65,2494.28],[97.08, -97.36, 22.18, -7.84, 65.64, -23.2,2609.61],[163.36, -108.99, -17.25, 50.49, -14.17, 41.47,2680.79],[115.62, -24.03, -272.94, -123.66, -324.43, -146.99,2835.25],[100.77, 54.73, 49.4, -44.86, 311.99, -283.28,3059.34],[1.81, 54.29, -40.03, 58.66, -33.79, 49.52,3168.06],[20.06, 109.18, -46.28, 44.4, -39.2, 37.61,3230.55],[-25.89, 72.81, -75.72, 61.38, -26.71, 21.65,3294.52],[18.44, 76.82, 37.14, -46.18, 60.22, -74.88,3366.85],[14.66, 10.17, 0, 0, 0, 0,3435.18]]
                        ]
                    ]
                }
            },
            "pond": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'water',
                            type: 'image',
                            rect: ['0px', '0px', '1014px', '249px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/water.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1014px', '249px']
                        }
                    }
                },
                timeline: {
                    duration: 5055,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("hama_edgeActions.js");
})("hama");
