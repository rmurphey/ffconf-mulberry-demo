toura.templates = {
  "home-phone": {
    "type": "node",
    "screens": [
      {
        "regions": [
          {
            "regions": [
              {
                "components": [

                ],
                "type": "row"
              },
              {
                "components": [
                  "BodyText",
                  "ChildNodes"
                ],
                "type": "row",
                "scrollable": true
              }
            ],
            "type": "row"
          },
          {
            "size": "fixed",
            "components": [
              "AppNav"
            ],
            "type": "row"
          }
        ],
        "name": "index",
        "backgroundImage": true
      }
    ]
  },
  "google-map-tablet": {
    "capabilities": [
      {
        "name": "Page_GoogleMapTablet",
        "components": [
          "index:GoogleMap",
          "index:PinInfo"
        ]
      }
    ],
    "type": "node",
    "screens": [
      {
        "regions": [
          {
            "size": "fixed",
            "components": [
              "PageNav"
            ]
          },
          {
            "layout": "overlay",
            "components": [
              "PinInfo"
            ],
            "className": "hidden"
          },
          {
            "components": [
              "GoogleMap"
            ]
          }
        ],
        "name": "index",
        "backgroundImage": false
      }
    ]
  },
  "audio-with-images-phone": {
    "capabilities": [
      {
        "name": "ImageGallery_ImageCaption",
        "components": [
          "index:ImageGallery",
          "index:ImageCaption"
        ]
      },
      {
        "name": "ImageGalleryDetail",
        "components": [
          "index:ImageGallery",
          "detail:ZoomableImageGallery",
          "detail:DetailTitle"
        ]
      },
      {
        "name": "Page_Images",
        "components": [
          "index:ImageGallery",
          "index:ImageCaption"
        ]
      },
      {
        "name": "Page_Audios",
        "components": [
          "index:AudioList",
          "index:AudioPlayer"
        ]
      },
      {
        "name": "AudioList_AudioPlayer",
        "components": [
          "index:AudioPlayer",
          "index:AudioList"
        ]
      },
      {
        "name": "AudioList_AudioCaption",
        "components": [
          "index:AudioList",
          "index:AudioCaption"
        ]
      }
    ],
    "type": "node",
    "screens": [
      {
        "regions": [
          {
            "size": "fixed",
            "components": [
              "PageNav"
            ],
            "type": "row"
          },
          {
            "components": [
              "ImageGallery"
            ],
            "type": "row"
          },
          {
            "size": "fixed",
            "components": [
              "AudioPlayer"
            ],
            "type": "row"
          },
          {
            "regions": [
              {
                "components": [
                  "AudioList",
                  "ChildNodes",
                  "AudioCaption",
                  "ImageCaption",
                  "BodyText"
                ],
                "type": "row",
                "scrollable": true
              }
            ],
            "type": "row"
          }
        ],
        "name": "index",
        "backgroundImage": true
      },
      {
        "regions": [
          {
            "size": "fixed",
            "layout": "overlay",
            "components": [
              "DetailTitle"
            ],
            "type": "row"
          },
          {
            "components": [
              "ZoomableImageGallery"
            ],
            "type": "row"
          }
        ],
        "name": "detail"
      }
    ]
  },
  "location-list": {
    "capabilities": [
      {
        "name": "ImageGalleryDetail",
        "components": [
          "index:ImageGallery",
          "detail:ZoomableImageGallery",
          "detail:DetailTitle"
        ]
      }
    ],
    "type": "node",
    "screens": [
      {
        "regions": [
          {
            "size": "fixed",
            "components": [
              "PageNav"
            ],
            "type": "row"
          },
          {
            "components": [
              "NodeTitleBanner",
              "ImageGallery",
              "BodyText",
              "LocationList"
            ],
            "type": "row",
            "scrollable": true
          }
        ],
        "name": "index"
      },
      {
        "regions": [
          {
            "size": "fixed",
            "layout": "overlay",
            "components": [
              "DetailTitle"
            ],
            "type": "row"
          },
          {
            "components": [
              "ZoomableImageGallery"
            ],
            "type": "row"
          }
        ],
        "name": "detail"
      }
    ]
  },
  "home-with-header-tablet": {
    "type": "node",
    "screens": [
      {
        "regions": [
          {
            "size": "fixed",
            "components": [
              "PageHeaderImage"
            ],
            "type": "row"
          },
          {
            "regions": [
              {
                "components": [
                  "BodyText"
                ],
                "type": "row",
                "scrollable": true
              },
              {
                "components": [
                  "ChildNodes"
                ],
                "type": "row",
                "scrollable": true
              }
            ],
            "type": "row"
          },
          {
            "size": "fixed",
            "components": [
              "AppNav"
            ],
            "type": "row"
          }
        ],
        "name": "index",
        "backgroundImage": true
      }
    ]
  },
  "audio-with-images-tablet": {
    "capabilities": [
      {
        "name": "ImageGallery_ImageCaption",
        "components": [
          "index:ImageGallery",
          "index:ImageCaption"
        ]
      },
      {
        "name": "ImageGalleryDetail",
        "components": [
          "index:ImageGallery",
          "detail:ZoomableImageGallery",
          "detail:DetailTitle"
        ]
      },
      {
        "name": "Page_Images",
        "components": [
          "index:ImageGallery",
          "index:ImageCaption"
        ]
      },
      {
        "name": "Page_Audios",
        "components": [
          "index:AudioList",
          "index:AudioPlayer"
        ]
      },
      {
        "name": "AudioList_AudioPlayer",
        "components": [
          "index:AudioPlayer",
          "index:AudioList"
        ]
      },
      {
        "name": "AudioList_AudioCaption",
        "components": [
          "index:AudioList",
          "index:AudioCaption"
        ]
      }
    ],
    "type": "node",
    "screens": [
      {
        "regions": [
          {
            "size": "fixed",
            "components": [
              "PageNav"
            ],
            "type": "row"
          },
          {
            "components": [
              "ImageGallery"
            ],
            "type": "row"
          },
          {
            "size": "fixed",
            "components": [
              "AudioPlayer"
            ],
            "type": "row"
          },
          {
            "regions": [
              {
                "components": [
                  "ChildNodes",
                  "AudioCaption",
                  "BodyText"
                ],
                "type": "column",
                "scrollable": true
              },
              {
                "components": [
                  "ImageCaption",
                  "AudioList"
                ],
                "type": "column",
                "scrollable": true
              }
            ],
            "type": "row"
          }
        ],
        "name": "index",
        "backgroundImage": true
      },
      {
        "regions": [
          {
            "size": "fixed",
            "layout": "overlay",
            "components": [
              "DetailTitle"
            ],
            "type": "row"
          },
          {
            "components": [
              "ZoomableImageGallery"
            ],
            "type": "row"
          }
        ],
        "name": "detail"
      }
    ]
  },
  "grid-view": {
    "type": "node",
    "screens": [
      {
        "regions": [
          {
            "size": "fixed",
            "components": [
              "PageNav"
            ],
            "type": "row"
          },
          {
            "size": "fixed",
            "components": [
              "PageHeaderImage"
            ],
            "type": "row"
          },
          {
            "components": [
              "BodyText",
              "ChildNodeGrid"
            ],
            "type": "row",
            "scrollable": true
          }
        ],
        "name": "index",
        "backgroundImage": true
      }
    ]
  },
  "default": {
    "type": "node",
    "screens": [
      {
        "regions": [
          {
            "size": "fixed",
            "components": [
              "PageNav"
            ],
            "type": "row"
          },
          {
            "components": [
              "PageHeaderImage",
              "BodyText",
              "ChildNodes"
            ],
            "type": "row",
            "scrollable": true
          }
        ],
        "name": "index",
        "backgroundImage": true
      }
    ]
  },
  "hotspots": {
    "type": "node",
    "screens": [
      {
        "regions": [
          {
            "size": "fixed",
            "components": [
              "PageNav"
            ],
            "type": "row"
          },
          {
            "components": [
              "Hotspots"
            ],
            "type": "row"
          }
        ]
      }
    ]
  },
  "images-and-text-phone": {
    "capabilities": [
      {
        "name": "ImageGallery_ImageCaption",
        "components": [
          "index:ImageGallery",
          "index:ImageCaption"
        ]
      },
      {
        "name": "ImageGalleryDetail",
        "components": [
          "index:ImageGallery",
          "detail:ZoomableImageGallery",
          "detail:DetailTitle"
        ]
      },
      {
        "name": "Page_Images",
        "components": [
          "index:ImageGallery",
          "index:ImageCaption"
        ]
      }
    ],
    "type": "node",
    "screens": [
      {
        "regions": [
          {
            "size": "fixed",
            "components": [
              "PageNav"
            ],
            "type": "row"
          },
          {
            "components": [
              "ImageGallery"
            ],
            "type": "row"
          },
          {
            "components": [
              "ChildNodes",
              "ImageCaption",
              "BodyText"
            ],
            "type": "row",
            "scrollable": true
          }
        ],
        "name": "index",
        "backgroundImage": true
      },
      {
        "regions": [
          {
            "size": "fixed",
            "layout": "overlay",
            "components": [
              "DetailTitle"
            ],
            "type": "row"
          },
          {
            "components": [
              "ZoomableImageGallery"
            ],
            "type": "row"
          }
        ],
        "name": "detail"
      }
    ]
  },
  "feed-list-phone": {
    "capabilities": [
      {
        "name": "FeedItemList_FeedItemPage",
        "components": [
          "index:FeedItemList"
        ]
      }
    ],
    "type": "node",
    "screens": [
      {
        "regions": [
          {
            "size": "fixed",
            "components": [
              "PageNav"
            ],
            "type": "row"
          },
          {
            "components": [
              "PageHeaderImage",
              "FeedItemList"
            ],
            "type": "row",
            "scrollable": true
          }
        ],
        "name": "index",
        "backgroundImage": true
      }
    ]
  },
  "feed-item": {
    "capabilities": [
      {
        "name": "PageNav_FeedTitle",
        "components": [
          "index:PageNav",
          "index:FeedItemDetail"
        ]
      }
    ],
    "type": "detail",
    "screens": [
      {
        "regions": [
          {
            "size": "fixed",
            "components": [
              "PageNav"
            ],
            "type": "row"
          },
          {
            "components": [
              "FeedItemDetail"
            ],
            "type": "row",
            "scrollable": true
          }
        ],
        "name": "index",
        "backgroundImage": true
      }
    ]
  },
  "images-and-text-tablet": {
    "capabilities": [
      {
        "name": "ImageGallery_ImageCaption",
        "components": [
          "index:ImageGallery",
          "index:ImageCaption"
        ]
      },
      {
        "name": "ImageGalleryDetail",
        "components": [
          "index:ImageGallery",
          "detail:ZoomableImageGallery",
          "detail:DetailTitle"
        ]
      },
      {
        "name": "Page_Images",
        "components": [
          "index:ImageGallery",
          "index:ImageCaption"
        ]
      }
    ],
    "type": "node",
    "screens": [
      {
        "regions": [
          {
            "size": "fixed",
            "components": [
              "PageNav"
            ],
            "type": "row"
          },
          {
            "components": [
              "ImageGallery"
            ],
            "type": "row"
          },
          {
            "regions": [
              {
                "components": [
                  "ChildNodes",
                  "BodyText"
                ],
                "type": "column",
                "scrollable": true
              },
              {
                "components": [
                  "ImageCaption"
                ],
                "type": "column",
                "scrollable": true
              }
            ],
            "type": "row"
          }
        ],
        "name": "index",
        "backgroundImage": true
      },
      {
        "regions": [
          {
            "size": "fixed",
            "layout": "overlay",
            "components": [
              "DetailTitle"
            ],
            "type": "row"
          },
          {
            "components": [
              "ZoomableImageGallery"
            ],
            "type": "row"
          }
        ],
        "name": "detail"
      }
    ]
  },
  "full-screen-images": {
    "capabilities": [
      {
        "name": "Page_FullScreenImages",
        "components": [
          "index:ZoomableImageGallery",
          "index:PageNav"
        ]
      }
    ],
    "type": "node",
    "screens": [
      {
        "regions": [
          {
            "size": "fixed",
            "layout": "overlay",
            "components": [
              "PageNav"
            ],
            "type": "row"
          },
          {
            "components": [
              "ZoomableImageGallery"
            ],
            "type": "row"
          }
        ],
        "name": "index"
      }
    ]
  },
  "node-gallery": {
    "type": "node",
    "screens": [
      {
        "regions": [
          {
            "size": "fixed",
            "components": [
              "PageNav"
            ],
            "type": "row"
          },
          {
            "size": "fixed",
            "components": [
              "DropDownText"
            ],
            "type": "row"
          },
          {
            "components": [
              "NodeGallery"
            ],
            "type": "row"
          }
        ],
        "name": "index"
      }
    ]
  },
  "home-with-header-phone": {
    "type": "node",
    "screens": [
      {
        "regions": [
          {
            "size": "fixed",
            "components": [
              "PageHeaderImage"
            ],
            "type": "row"
          },
          {
            "components": [
              "BodyText",
              "ChildNodes"
            ],
            "type": "row",
            "scrollable": true
          },
          {
            "size": "fixed",
            "components": [
              "AppNav"
            ],
            "type": "row"
          }
        ],
        "name": "index",
        "backgroundImage": true
      }
    ]
  },
  "home-tablet": {
    "type": "node",
    "screens": [
      {
        "regions": [
          {
            "regions": [
              {
                "components": [

                ],
                "className": "top",
                "type": "row"
              },
              {
                "regions": [
                  {
                    "components": [
                      "BodyText"
                    ],
                    "type": "column",
                    "scrollable": true
                  },
                  {
                    "components": [
                      "ChildNodes"
                    ],
                    "type": "column",
                    "scrollable": true
                  }
                ],
                "type": "row"
              }
            ],
            "type": "row"
          },
          {
            "size": "fixed",
            "components": [
              "AppNav"
            ],
            "type": "row"
          }
        ],
        "name": "index",
        "backgroundImage": true
      }
    ]
  },
  "google-map-phone": {
    "capabilities": [
      {
        "name": "Page_GoogleMapPhone",
        "components": [
          "index:GoogleMap",
          "detail:DetailTitle",
          "detail:PinInfo"
        ]
      }
    ],
    "type": "node",
    "screens": [
      {
        "regions": [
          {
            "size": "fixed",
            "components": [
              "PageNav"
            ]
          },
          {
            "components": [
              "GoogleMap"
            ]
          }
        ],
        "name": "index",
        "backgroundImage": false
      },
      {
        "regions": [
          {
            "size": "fixed",
            "components": [
              "DetailTitle"
            ]
          },
          {
            "components": [
              "PinInfo"
            ],
            "scrollable": true
          }
        ],
        "name": "detail",
        "backgroundImage": false
      }
    ]
  },
  "twitter": {
    "screens": [
      {
        "regions": [
          {
            "size": "fixed",
            "components": [
              "PageNav"
            ],
            "type": "row",
            "scrollable": false
          },
          {
            "size": "flex",
            "components": [
              "custom.Twitter"
            ],
            "type": "row",
            "scrollable": true
          }
        ],
        "name": "index"
      }
    ]
  },
  "feed-list-tablet": {
    "capabilities": [
      {
        "name": "FeedItemList_FeedItemDetail",
        "components": [
          "index:FeedItemList",
          "index:FeedItemDetail"
        ]
      }
    ],
    "type": "node",
    "screens": [
      {
        "regions": [
          {
            "size": "fixed",
            "components": [
              "PageNav"
            ],
            "type": "row"
          },
          {
            "regions": [
              {
                "size": "fixed",
                "components": [
                  "ColumnHeaderImage",
                  "FeedItemList"
                ],
                "backgroundImage": true,
                "type": "column",
                "scrollable": true
              },
              {
                "components": [
                  "FeedItemDetail"
                ],
                "type": "column",
                "scrollable": true
              }
            ],
            "type": "row"
          }
        ],
        "name": "index",
        "backgroundImage": false
      }
    ]
  }
};