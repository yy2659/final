var simplemaps_usmap_mapdata={
  main_settings: {
    //General settings
	width: "1000", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    
	///Label defaults
	label_color: "#002767",
    hide_labels: "no",
    border_color: "white",
    state_description: "",
    state_color: "gray",
    state_hover_color: "darkgray",
    state_url: "",
    all_states_inactive: "no",
    
	//Location defaults
	location_description: "Field Office",
    location_color: "hotpink",
    location_opacity: ".9",
    location_url: "http://simplemaps.com",
    all_states_zoomable: "yes",
    location_size: "20",
    location_type: "circle",
    all_locations_inactive: "no",
    url_new_tab: "yes",
    auto_load: "yes",
   
	//Zoom settings
	zoom: "yes",
    initial_zoom: "-1",
    initial_zoom_solo: "yes",
    popups: "detect",
    location_image_url: ""
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      description: "HRS §14-28",
      color: "blue",
      hover_color: "darkblue",
      url: "http://www.capitol.hawaii.gov/hrscurrent/Vol01_Ch0001-0042F/HRS0014/HRS_0014-0028.htm",
      hide: "no",
      inactive: "no",
      zoomable: "default"
    },
    AK: {
      name: "Alaska",
      hide: "no",
      inactive: "no",
      color: "red",
      hover_color: "darkred",
      description: "Alaska Stat. §15.30.090",
      url: "http://www.legis.state.ak.us/basis/statutes.asp#15.30.090"
    },
    FL: {
      name: "Florida",
      inactive: "no",
      hide: "no",
      color: "red",
      hover_color: "darkred",
      description: "Fla. Stat. §103.021(1)",
      url: "http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&Search_String=&URL=0100-0199/0103/Sections/0103.021.html"
    },
    NH: {
      name: "New Hampshire",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "RoyalBlue ",
      hover_color: "RoyalBlue "
    },
    VT: {
      name: "Vermont",
      hide: "no",
      inactive: "no",
      color: "blue",
      hover_color: "darkblue",
      description: "17 V.S.A §2732",
      url: "http://legislature.vermont.gov/statutes/section/17/057/02732"
    },
    ME: {
      name: "Maine",
      hide: "no",
      inactive: "no",
      color: "blue",
      hover_color: "darkblue",
      description: "21-A MRS §805",
      url: "http://legislature.maine.gov/statutes/21-A/title21-Asec805.html"
    },
    RI: {
      name: "Rhode Island",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "RoyalBlue ",
      hover_color: "RoyalBlue "
    },
    NY: {
      name: "New York",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "RoyalBlue ",
      hover_color: "RoyalBlue "
    },
    PA: {
      name: "Pennsylvania",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "FireBrick ",
      hover_color: "FireBrick "
    },
    NJ: {
      name: "New Jersey",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "RoyalBlue ",
      hover_color: "RoyalBlue "
    },
    DE: {
      name: "Delaware",
      hide: "no",
      inactive: "no",
      color: "blue",
      hover_color: "darkblue",
      description: "15 Del C §4303",
      url: "http://delcode.delaware.gov/title15/c043/index.shtml"
    },
    MD: {
      name: "Maryland",
      hide: "no",
      inactive: "no",
      color: "blue",
      hover_color: "darkblue",
      description: "MD Code, Election Law, §8-505",
      url: "http://mgaleg.maryland.gov/2017rs/statute_google/gel/8-505.pdf"
    },
    VA: {
      name: "Virginia",
      hide: "no",
      inactive: "no",
      color: "blue",
      hover_color: "darkblue",
      description: "§24.2-203",
      url: "http://law.lis.virginia.gov/vacode/title24.2/chapter2/section24.2-203/"
    },
    WV: {
      name: "West Virginia",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "RoyalBlue ",
      hover_color: "RoyalBlue "
    },
    OH: {
      name: "Ohio",
      hide: "no",
      inactive: "no",
      color: "red",
      hover_color: "darkred",
      description: "ORC Ann §3505.40",
      url: "http://codes.ohio.gov/orc/3505.40v1"
    },
    IN: {
      name: "Indiana",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "FireBrick ",
      hover_color: "FireBrick "
    },
    IL: {
      name: "Illinois",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "RoyalBlue ",
      hover_color: "RoyalBlue "
    },
    CT: {
      name: "Connecticut",
      hide: "no",
      inactive: "no",
      color: "blue",
      hover_color: "darkblue",
      description: "Conn. Gen. Stat. §9-176",
      url: "https://www.cga.ct.gov/current/PUB/chap_146.htm#sec_9-176"
    },
    WI: {
      name: "Wisconsin",
      hide: "no",
      inactive: "no",
      color: "red",
      hover_color: "darkred",
      description: "Wis Stat §7.75",
      url: "https://docs.legis.wisconsin.gov/statutes/statutes/7/II/75"
    },
    NC: {
      name: "North Carolina",
      hide: "no",
      inactive: "no",
      color: "red",
      hover_color: "darkred",
      description: "NC Gen Stat §163-212",
      url: "http://www.ncleg.net/enactedlegislation/statutes/html/bysection/chapter_163/gs_163-212.html"
    },
    DC: {
      name: "District of Columbia",
      hide: "no",
      inactive: "no",
      color: "blue",
      hover_color: "darkblue",
      description: "§1-1001",
      url: "https://beta.code.dccouncil.us/dc/council/code/titles/1/chapters/10/subchapters/I/"
    },
    MA: {
      name: "Massachusetts",
      hide: "no",
      inactive: "no",
      color: "blue",
      hover_color: "darkblue",
      description: "MGL, ch. 53, §8",
      url: "https://malegislature.gov/Laws/GeneralLaws/PartI/TitleVIII/Chapter53/Section8"
    },
    TN: {
      name: "Tennessee",
      hide: "no",
      inactive: "no",
      color: "red",
      hover_color: "darkred",
      description: "Tenn Code Ann §2-15-104(c)",
      url: "http://law.justia.com/codes/tennessee/2015/title-2/chapter-15/section-2-15-104/"
    },
    AR: {
      name: "Arkansas",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "FireBrick ",
      hover_color: "FireBrick "
    },
    MO: {
      name: "Missouri",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "FireBrick ",
      hover_color: "FireBrick "
    },
    GA: {
      name: "Georgia",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "FireBrick ",
      hover_color: "FireBrick "
    },
    SC: {
      name: "South Carolina",
      hide: "no",
      inactive: "no",
      color: "red",
      hover_color: "darkred",
      description: "SC Code Ann §7-19-80",
      url: "http://www.scstatehouse.gov/code/t07c019.php"
    },
    KY: {
      name: "Kentucky",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "FireBrick ",
      hover_color: "FireBrick "
    },
    AL: {
      name: "Alabama",
      hide: "no",
      inactive: "no",
      color: "red",
      url: "http://alisondb.legislature.state.al.us/alison/CodeOfAlabama/1975/Coatoc.htm",
      hover_color: "darkred",
      description: "Code of Ala. §17-14-31"
    },
    LA: {
      name: "Louisiana",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "FireBrick ",
      hover_color: "FireBrick "
    },
    MS: {
      name: "Mississippi",
      hide: "no",
      inactive: "no",
      color: "red",
      hover_color: "darkred",
      description: "Miss Code Ann §23-15-785: Title 23 Chapter 15 Article 21B",
      url: "http://www.legislature.ms.gov/Pages/default.aspx"
    },
    IA: {
      name: "Iowa",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "FireBrick ",
      hover_color: "FireBrick "
    },
    MN: {
      name: "Minnesota",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      hover_color: "RoyalBlue ",
      color: "RoyalBlue "
    },
    OK: {
      name: "Oklahoma",
      hide: "no",
      inactive: "no",
      color: "red",
      hover_color: "darkred",
      description: "26 Okl St §10-102",
      url: "http://www.oklegislature.gov/osstatuestitle.html"
    },
    TX: {
      name: "Texas",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "FireBrick ",
      hover_color: "FireBrick "
    },
    NM: {
      name: "New Mexico",
      hide: "no",
      inactive: "no",
      color: "blue",
      hover_color: "darkblue",
      description: "NM Stat Ann §1-15-9",
      url: "http://public.nmcompcomm.us/nmpublic/gateway.dll/?f=templates&fn=default.htm"
    },
    KS: {
      name: "Kansas",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "FireBrick ",
      hover_color: "FireBrick "
    },
    NE: {
      name: "Nebraska",
      hide: "no",
      inactive: "no",
      color: "red",
      hover_color: "darkred",
      description: "§32-714",
      url: "http://nebraskalegislature.gov/laws/statutes.php?statute=32-714"
    },
    SD: {
      name: "South Dakota",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "FireBrick ",
      hover_color: "FireBrick "
    },
    ND: {
      name: "North Dakota",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "FireBrick ",
      hover_color: "FireBrick "
    },
    WY: {
      name: "Wyoming",
      hide: "no",
      inactive: "no",
      color: "red",
      hover_color: "darkred",
      description: "Wyo Stat §22-19-108",
      url: "http://soswy.state.wy.us/Elections/WyoPresElectorInfo.aspx"
    },
    MT: {
      name: "Montana",
      hide: "no",
      inactive: "no",
      color: "red",
      hover_color: "darkred",
      description: "MCA §13-25-104",
      url: "http://leg.mt.gov/bills/1997/mca/13/25/13-25-104.htm"
    },
    CO: {
      name: "Colorado",
      hide: "no",
      inactive: "no",
      color: "blue",
      hover_color: "darkblue",
      description: "CRS §1-4-304",
      url: "https://www.sos.state.co.us/pubs/elections/lawsRulesResources.html?menuheaders=5"
    },
    UT: {
      name: "Utah",
      hide: "no",
      inactive: "no",
      color: "red",
      hover_color: "darkred",
      description: "Utah Code Ann §20A-13-304",
      url: "https://le.utah.gov/xcode/Title20A/Chapter13/20A-13-S304.html?v=C20A-13-S304_1800010118000101"
    },
    AZ: {
      name: "Arizona",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "FireBrick ",
      hover_color: "FireBrick "
    },
    NV: {
      name: "Nevada",
      hide: "no",
      inactive: "no",
      color: "blue",
      hover_color: "darkblue",
      description: "NRS §298.045",
      url: "https://www.leg.state.nv.us/nrs/NRS-298.html"
    },
    OR: {
      name: "Oregon",
      hide: "no",
      inactive: "no",
      color: "blue",
      hover_color: "darkblue",
      description: "ORS §248.355",
      url: "https://www.oregonlegislature.gov/bills_laws/ors/ors248.html"
    },
    WA: {
      name: "Washington",
      hide: "no",
      inactive: "no",
      color: "blue",
      hover_color: "darkblue",
      description: "RCW §29A.56.320",
      url: "http://app.leg.wa.gov/rcw/default.aspx?cite=29A.56.320"
    },
    CA: {
      name: "California",
      hide: "no",
      inactive: "no",
      color: "blue",
      hover_color: "darkblue",
      description: "Election Code §6906",
      url: "http://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=6906.&lawCode=ELEC"
    },
    MI: {
      name: "Michigan",
      hide: "no",
      inactive: "no",
      description: "MCL §168.47",
      url: "https://www.legislature.mi.gov/(S(iwerdhdzrsrdoiti3jf0dmki))/mileg.aspx?page=GetObject&objectname=mcl-168-47",
      color: "FireBrick ",
      hover_color: "FireBrick "
    },
    ID: {
      name: "Idaho",
      hide: "no",
      inactive: "no",
      description: "no specific law",
      color: "FireBrick ",
      hover_color: "FireBrick "
    },
    GU: {
      name: "Guam",
      hide: "no",
      inactive: "no",
      description: "no specific law"
    },
    VI: {
      name: "Virgin Islands",
      hide: "no",
      inactive: "no",
      description: "no specific law"
    },
    PR: {
      name: "Puerto Rico",
      hide: "no",
      inactive: "no",
      description: "no specific law"
    },
    MP: {
      name: "Northern Mariana Islands",
      hide: "no",
      inactive: "no",
      description: "no specific law"
    }
  },
  locations: {},
  regions: {},
  continent: [
    {
      x: "0",
      y: "0",
      height: "615.7894736848264",
      width: "1000"
    }
  ],
  data: {
    data: {
      NY: "100",
      FL: "10000"
    }
  }
};