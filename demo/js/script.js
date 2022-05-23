
function fillIcons() {
  var gridNewIcons = document.querySelector('.icons-new-icons');
  var gridNewAlias = document.querySelector('.icons-alias-new');
  var gridDirectional = document.querySelector('.icons-directional');
  var gridUI = document.querySelector('.icons-ui');
  var gridEditor = document.querySelector('.icons-editor');
  var gridData = document.querySelector('.icons-data');
  var gridFile = document.querySelector('.icons-file');
  var gridChat = document.querySelector('.icons-chat');
  var gridMedia = document.querySelector('.icons-media');
  var gridHand = document.querySelector('.icons-hand');
  var gridTransport = document.querySelector('.icons-transport');
  var gridCurrency = document.querySelector('.icons-currency');
  var gridAccessibility = document.querySelector('.icons-accessibility');

  gridNewIcons.innerHTML = '';
  gridNewAlias.innerHTML = '';
  gridDirectional.innerHTML = '';
  gridUI.innerHTML = '';
  gridEditor.innerHTML = '';
  gridData.innerHTML = '';
  gridFile.innerHTML = '';
  gridChat.innerHTML = '';
  gridMedia.innerHTML = '';
  gridHand.innerHTML = '';
  gridTransport.innerHTML = '';
  gridCurrency.innerHTML = '';
  gridAccessibility.innerHTML = '';

  gridNewIcons.innerHTML = '<ul class="products">' + getIcons(new_icons) + '<ul>';
  gridNewAlias.innerHTML = '<ul class="products">' + getIcons(new_alias) + '<ul>';
  gridDirectional.innerHTML = '<ul class="products">' + getIcons(directional) + '<ul>';
  gridUI.innerHTML = '<ul class="products">' + getIcons(ui) + '<ul>';
  gridEditor.innerHTML = '<ul class="products">' + getIcons(editor) + '<ul>';
  gridData.innerHTML = '<ul class="products">' + getIcons(data) + '<ul>';
  gridFile.innerHTML = '<ul class="products">' + getIcons(files) + '<ul>';
  gridChat.innerHTML = '<ul class="products">' + getIcons(chat) + '<ul>';
  gridMedia.innerHTML = '<ul class="products">' + getIcons(media) + '<ul>';
  gridHand.innerHTML = '<ul class="products">' + getIcons(hand) + '<ul>';
  gridTransport.innerHTML = '<ul class="products">' + getIcons(transport) + '<ul>';
  gridCurrency.innerHTML = '<ul class="products">' + getIcons(currency) + '<ul>';
  gridAccessibility.innerHTML = '<ul class="products">' + getIcons(accessibility) + '<ul>';

}

function getIcons(icons) {
  let list = "";

  icons.forEach((element) => {
    list = list.concat('', "<li><i class='o9con o9con-" + element + "'></i><p>" + element + "</p></li>");
  })
  return list;
};


var allName = [
  "3d-model",
  "add-book",
  "add-presentation",
  "add-textbox",
  "add-view",
  "address-book",
  "address-card",
  "adjust",
  "align-center",
  "align-justify",
  "align-left",
  "align-right",
  "ambulance",
  "american-sign-language-interpreting",
  "anchor",
  "angle-double-down",
  "angle-double-left",
  "angle-double-right",
  "angle-double-up",
  "angle-down",
  "angle-left",
  "angle-right",
  "angle-up",
  "antenna",
  "apps",
  "archive",
  "archive-alt",
  "area-chart",
  "area-chart-alt",
  "area-chart-xy",
  "arrow-circle-down",
  "arrow-circle-left",
  "arrow-circle-o-down",
  "arrow-circle-o-left",
  "arrow-circle-o-right",
  "arrow-circle-o-up",
  "arrow-circle-right",
  "arrow-circle-up",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "arrow-up",
  "arrows",
  "arrows-alt",
  "arrows-alt-o",
  "arrows-h",
  "arrows-o",
  "arrows-v",
  "asl-interpreting",
  "assistive-listening-systems",
  "asterisk",
  "asterisk-alt",
  "asterisk-o",
  "at",
  "automobile",
  "background-color",
  "backward",
  "balance-scale",
  "ban",
  "bandcamp",
  "bank",
  "bar-chart",
  "bar-chart-h",
  "bar-chart-o",
  "bar-chart-v",
  "barcode",
  "bars",
  "bath",
  "battery",
  "battery-empty",
  "battery-half",
  "battery-quarter",
  "battery-three-quarters",
  "bed",
  "beer",
  "bell-curve",
  "bell-o",
  "bell-slash",
  "bicycle",
  "bin",
  "bin-alt",
  "binoculars",
  "birthday-cake",
  "blind",
  "blockchain",
  "bluetooth",
  "bluetooth-b",
  "bold",
  "bolt",
  "bomb",
  "book",
  "book-download",
  "book-excel",
  "book-help",
  "book-x",
  "bookmark",
  "bookmark-o",
  "braille",
  "briefcase",
  "btc",
  "bug",
  "building",
  "bulk-edit",
  "bullhorn",
  "bullseye",
  "bus",
  "cab",
  "calculator",
  "calendar",
  "calendar-check-o",
  "calendar-date",
  "calendar-end",
  "calendar-minus-o",
  "calendar-o",
  "calendar-plus-o",
  "calendar-progress",
  "calendar-start",
  "calendar-times-o",
  "calendar-warning",
  "call",
  "call-alt",
  "camera",
  "camera-retro",
  "car",
  "caret-collapsed",
  "caret-down",
  "caret-expanded",
  "caret-left",
  "caret-right",
  "caret-scroll-h",
  "caret-scroll-v",
  "caret-square-o-down",
  "caret-square-o-left",
  "caret-square-o-right",
  "caret-square-o-up",
  "caret-unfold-h",
  "caret-unfold-v",
  "caret-up",
  "cart-arrow-down",
  "cart-plus",
  "cc",
  "cc-o",
  "cellular-network",
  "certificate",
  "chain",
  "chain-broken",
  "chart-progress",
  "check",
  "check-circle",
  "check-circle-o",
  "check-square",
  "check-square-o",
  "check-square-o-alt",
  "chevron",
  "chevron-circle-down",
  "chevron-circle-left",
  "chevron-circle-right",
  "chevron-circle-up",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "chevron-up",
  "child",
  "child-alt",
  "circle",
  "circle-o",
  "circle-o-notch",
  "circle-thin",
  "clear",
  "clipboard",
  "clock-o",
  "close",
  "close-circle",
  "close-circle-o",
  "cloud",
  "cloud-download",
  "cloud-upload",
  "cny",
  "code",
  "code-editor",
  "code-fork",
  "coffee",
  "cog",
  "cogs",
  "collapse-group",
  "color",
  "columns",
  "combo-chart",
  "combo-chart-alt",
  "comment",
  "comment-add",
  "comment-check",
  "comment-copy",
  "comment-cross",
  "comment-empty",
  "comment-help",
  "comment-help-alt",
  "comment-line",
  "comment-new",
  "comment-o",
  "comment-quote",
  "comment-text",
  "commenting",
  "commenting-alt",
  "commenting-o",
  "comments",
  "comments-alt",
  "comments-o",
  "compare-git",
  "compass",
  "components",
  "compress",
  "compress-alt",
  "copy",
  "copyright",
  "create-scene",
  "create-task",
  "credit-card",
  "credit-card-alt",
  "crop",
  "crosshairs",
  "cube",
  "cubes",
  "cup",
  "cut",
  "cutlery",
  "dashboard",
  "data-management",
  "database",
  "database-admin",
  "database-alt",
  "database-encryption",
  "database-protection",
  "database-search",
  "deaf",
  "decrease-font",
  "dedent",
  "designer",
  "desktop",
  "desktop-alt",
  "desktop-cloud",
  "desktop-cog",
  "desktop-heart",
  "deviation",
  "diamond",
  "diversity",
  "doctor-female",
  "doctor-male",
  "dollar",
  "dot-circle-o",
  "doughnut-chart",
  "download",
  "drawing-compass",
  "drivers-license",
  "duplicate",
  "edit",
  "edit-cell",
  "edit-column",
  "edit-properties",
  "edit-row",
  "eject",
  "eject-circle",
  "eject-square",
  "ellipsis-h",
  "ellipsis-v",
  "empire",
  "envelope",
  "envelope-o",
  "envelope-open-o",
  "envelope-square",
  "eraser",
  "eur",
  "euro",
  "excel",
  "exchange",
  "exclamation",
  "exclamation-circle",
  "exclamation-triangle",
  "execute",
  "expand",
  "expand-alt",
  "expand-group",
  "expand-nodes",
  "export",
  "external-link",
  "external-link-square",
  "eye",
  "eye-slash",
  "eyedropper",
  "factory-setting",
  "falling",
  "fast-backward",
  "fast-forward",
  "fast-forward-circle",
  "fast-forward-square",
  "favorite-download",
  "fax",
  "female",
  "female-alt",
  "female-o",
  "fighter-jet",
  "file",
  "file-add",
  "file-archive-o",
  "file-audio-o",
  "file-bookmark",
  "file-cabinet",
  "file-code-o",
  "file-excel-o",
  "file-favorite",
  "file-image-o",
  "file-movie-o",
  "file-music-o",
  "file-o",
  "file-pdf-o",
  "file-photo-o",
  "file-picture-o",
  "file-powerpoint-o",
  "file-script",
  "file-setting",
  "file-sound-o",
  "file-stats",
  "file-text",
  "file-text-o",
  "file-video-o",
  "file-word-o",
  "files",
  "files-copy",
  "files-o",
  "film",
  "filter",
  "filter-check",
  "filter-ext",
  "filter-lock",
  "fire",
  "fire-extinguisher",
  "flag",
  "flag-checkered",
  "flag-edge",
  "flag-o",
  "flag-triangle",
  "flame",
  "flash",
  "flask",
  "floppy-o",
  "flow-chart",
  "focus-center",
  "focus-center-alt",
  "focus-lock",
  "folder",
  "folder-add",
  "folder-add-alt",
  "folder-open",
  "folder-open-o",
  "font",
  "font-color",
  "forward",
  "frown",
  "full-screen",
  "full-screen-alt",
  "full-screen-exit",
  "futbol-o",
  "gamepad",
  "gavel",
  "gbp",
  "ge",
  "gear",
  "gears",
  "geo-marker",
  "geo-marker-o",
  "gg",
  "gg-circle",
  "gift",
  "glass",
  "globe",
  "graduation-cap",
  "grid",
  "grid-alt",
  "group",
  "groups",
  "h-square",
  "hand-clap",
  "hand-grab-o",
  "hand-lizard-o",
  "hand-o-down",
  "hand-o-left",
  "hand-o-right",
  "hand-o-up",
  "hand-paper-o",
  "hand-peace-o",
  "hand-pointer-o",
  "hand-rock-o",
  "hand-scissors-o",
  "hand-spock-o",
  "hand-stop-o",
  "handshake-o",
  "hashtag",
  "hashtag-alt",
  "hdd-o",
  "header",
  "headphones",
  "heart",
  "heart-o",
  "heartbeat",
  "heatmap",
  "height",
  "hide",
  "hierarchy",
  "history",
  "home",
  "home-alt",
  "hospital-o",
  "hotel",
  "hourglass",
  "hourglass-end",
  "hourglass-o",
  "hourglass-start",
  "i-cursor",
  "id-badge",
  "id-card",
  "ils",
  "image",
  "inbox",
  "increase-font",
  "indent",
  "industry",
  "industry-alt",
  "info",
  "info-circle",
  "inr",
  "insert",
  "insert-circle",
  "insert-square",
  "institution",
  "italic",
  "jpy",
  "key",
  "key-alt",
  "keyboard-o",
  "krw",
  "language",
  "laptop",
  "layout",
  "lead-time",
  "leaf",
  "length",
  "level-down",
  "level-up",
  "life-bouy",
  "lightbulb-glow",
  "lightbulb-o",
  "line-chart",
  "line-chart-alt",
  "link",
  "list",
  "list-alt",
  "list-ol",
  "list-ul",
  "location-arrow",
  "lock",
  "lock-alt",
  "lock-filter",
  "lock-hole",
  "lock-open",
  "lock-open-alt",
  "logical-group",
  "long-arrow-down",
  "long-arrow-left",
  "long-arrow-right",
  "long-arrow-up",
  "loss",
  "low-vision",
  "magic",
  "magnet",
  "mail-forward",
  "mail-new",
  "mail-o9",
  "mail-reply",
  "mail-reply-all",
  "mail-write",
  "male",
  "male-alt",
  "male-o",
  "map",
  "map-marker",
  "map-pin",
  "map-signs",
  "maslow-pyramid",
  "max-val",
  "measure-tools",
  "medkit",
  "meh",
  "merge-git",
  "merge-up",
  "microchip",
  "microphone",
  "microphone-slash",
  "min-val",
  "mind-map",
  "minus",
  "minus-circle",
  "minus-circle-o",
  "minus-square",
  "minus-square-o",
  "missed-call",
  "mobile",
  "mobile-alt",
  "mobile-phone",
  "money",
  "monitor",
  "moon-o",
  "moon-star",
  "motorcycle",
  "mouse-pointer",
  "music",
  "mute",
  "network-collapse",
  "network-expand",
  "network-nodes",
  "newspaper-o",
  "next",
  "next-circle",
  "next-square",
  "no-call",
  "no-edit",
  "normal-distribution",
  "notes",
  "notification",
  "o9-circle",
  "o9-logo",
  "object-group",
  "object-ungroup",
  "old",
  "omni-direction-alt",
  "online",
  "open-new",
  "outdent",
  "paint-brush",
  "paper-plane",
  "paper-plane-land",
  "paper-plane-o",
  "paper-plane-send",
  "paperclip",
  "paragraph",
  "paste",
  "pause",
  "pause-circle",
  "pause-square",
  "pdf-download",
  "pencil",
  "pencil-square",
  "pencil-square-o",
  "performance-monitor",
  "phone",
  "phone-book",
  "phone-square",
  "photo",
  "photo-o",
  "picture",
  "picture-o",
  "pie-chart",
  "pie-chart-alt",
  "pipeline",
  "plane",
  "play",
  "play-circle",
  "play-circle-o",
  "play-presentation",
  "play-square",
  "plug",
  "plus",
  "plus-circle",
  "plus-circle-o",
  "plus-square",
  "plus-square-o",
  "power-off",
  "presentation",
  "prev",
  "prev-circle",
  "prev-square",
  "print",
  "printer",
  "priority-edge",
  "process",
  "profit",
  "profit-flag",
  "pull-request",
  "push-pin",
  "puzzle-piece",
  "qrcode",
  "question",
  "question-circle",
  "quote-left",
  "quote-right",
  "random",
  "record",
  "record-circle",
  "record-square",
  "recycle",
  "redo",
  "refresh",
  "registered",
  "registered-trademark",
  "remove",
  "rename",
  "repeat",
  "repeat-all",
  "repeat-alt",
  "repeat-one",
  "repeat-one-alt",
  "reply",
  "reply-all",
  "report-config",
  "respread",
  "respread-alt",
  "resume",
  "resume-circle",
  "resume-square",
  "retweet",
  "retweet-alt",
  "rewind-circle",
  "rewind-square",
  "rising",
  "road",
  "rocket",
  "rotate-90",
  "rotate-left",
  "rotate-right",
  "rss",
  "rss-square",
  "rub",
  "ruler",
  "save",
  "scatter-plot",
  "scenario",
  "scissors",
  "search",
  "search-minus",
  "search-plus",
  "send",
  "send-o",
  "setting-edit",
  "share",
  "share-alt",
  "share-alt-square",
  "share-circle",
  "share-square",
  "share-square-o",
  "shield",
  "ship",
  "shopping-bag",
  "shopping-basket",
  "shopping-cart",
  "show",
  "show-view",
  "shower",
  "shrink-corners",
  "shrink-nodes",
  "shuffle",
  "sign-in",
  "sign-out",
  "signal",
  "signal-alt",
  "sitemap",
  "size",
  "slack",
  "sliders",
  "smile",
  "snowflake",
  "sort",
  "sort-12-up",
  "sort-21-up",
  "sort-alpha-asc",
  "sort-alpha-desc",
  "sort-amount-asc",
  "sort-amount-desc",
  "sort-asc-up",
  "sort-az-up",
  "sort-down",
  "sort-dsc-up",
  "sort-numeric-asc",
  "sort-numeric-desc",
  "sort-za-up",
  "space-shuttle",
  "speaker",
  "spinner",
  "split-up",
  "spreaker-translate",
  "square",
  "square-o",
  "square-square-o",
  "stack",
  "stack-exchange",
  "stack-overflow",
  "stacked-bar-h",
  "stacked-bar-v",
  "star",
  "star-half",
  "star-half-empty",
  "star-half-full",
  "star-half-o",
  "star-o",
  "states",
  "step-backward",
  "step-forward",
  "stethoscope",
  "sticky-note-o",
  "stop",
  "stop-circle",
  "stop-square",
  "stop-watch",
  "street-view",
  "strikethrough",
  "subscript",
  "subway",
  "suitcase",
  "sun-o",
  "superpowers",
  "superscript",
  "support",
  "support-ticket",
  "swipe-right",
  "table",
  "table-column",
  "table-row",
  "tablet",
  "tag",
  "tags",
  "tape",
  "target",
  "tasks",
  "taxi",
  "telephone",
  "template",
  "tenant",
  "terminal",
  "text",
  "text-height",
  "text-width",
  "th",
  "th-large",
  "thermometer",
  "thermometer-empty",
  "thermometer-full",
  "thermometer-half",
  "thermometer-quarter",
  "thermometer-three-quarters",
  "thumb-tack",
  "thumb-tack-alt",
  "thumbs-down",
  "thumbs-o-down",
  "thumbs-o-up",
  "thumbs-up",
  "ticket",
  "ticket-add",
  "tile-layout",
  "timeline",
  "timeline-h",
  "timeline-v",
  "times-circle",
  "times-circle-o",
  "times-square",
  "times-square-o",
  "tint",
  "toggle-down",
  "toggle-left",
  "toggle-off",
  "toggle-on",
  "toggle-right",
  "toggle-up",
  "tools",
  "tornado",
  "trademark",
  "train",
  "transform",
  "trash",
  "trash-o",
  "tree-structure",
  "tree-view",
  "trend-down",
  "trend-up",
  "trophy",
  "truck",
  "try",
  "tty",
  "turn-down-left",
  "turn-down-right",
  "turn-left-down",
  "turn-left-up",
  "turn-right-down",
  "turn-right-up",
  "turn-up-left",
  "turn-up-right",
  "umbrella",
  "umbrella-rain",
  "underline",
  "undo",
  "universal-access",
  "unlink",
  "up-down",
  "upload",
  "usb",
  "user",
  "user-edit",
  "user-management",
  "user-plus",
  "user-setting",
  "user-times",
  "users",
  "users-alt",
  "viacoin",
  "video",
  "video-rec",
  "view-report",
  "volume-control-phone",
  "volume-down",
  "volume-high",
  "volume-low",
  "volume-mid",
  "volume-mute",
  "volume-up",
  "warning",
  "webhook",
  "webhook-o",
  "wheelchair",
  "wheelchair-alt",
  "width",
  "wifi",
  "window-close",
  "window-maximize",
  "window-minimize",
  "window-restore",
  "wrench",
  "zoom-in",
  "zoom-out",
  "legend",
  "edge"
]

var directional = [
  "angle-double-down",
  "angle-double-left",
  "angle-double-right",
  "angle-double-up",
  "angle-down",
  "angle-left",
  "angle-right",
  "angle-up",
  "arrow-circle-down",
  "arrow-circle-left",
  "arrow-circle-o-down",
  "arrow-circle-o-left",
  "arrow-circle-o-right",
  "arrow-circle-o-up",
  "arrow-circle-right",
  "arrow-circle-up",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "arrow-up",
  "arrows",
  "arrows-alt",
  "arrows-alt-o",
  "arrows-h",
  "arrows-o",
  "arrows-v",
  "caret-collapsed",
  "caret-down",
  "caret-expanded",
  "caret-left",
  "caret-right",
  "caret-scroll-h",
  "caret-scroll-v",
  "caret-square-o-down",
  "caret-square-o-left",
  "caret-square-o-right",
  "caret-square-o-up",
  "caret-unfold-h",
  "caret-unfold-v",
  "caret-up",
  "chevron",
  "chevron-circle-down",
  "chevron-circle-left",
  "chevron-circle-right",
  "chevron-circle-up",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "chevron-up",
  "level-down",
  "level-up",
  "long-arrow-down",
  "long-arrow-left",
  "long-arrow-right",
  "long-arrow-up",
  "mail-forward",
  "reply",
  "reply-all",
  "sort",
  "trend-down",
  "trend-up",
  "turn-down-left",
  "turn-down-right",
  "turn-left-down",
  "turn-left-up",
  "turn-right-down",
  "turn-right-up",
  "turn-up-left",
  "turn-up-right",
  "up-down",
]

var ui = [
  "3d-model",
  "add-book",
  "add-presentation",
  "add-textbox",
  "add-view",
  "address-book",
  "address-card",
  "adjust",
  "anchor",
  "antenna",
  "apps",
  "archive",
  "archive-alt",
  "asterisk",
  "asterisk-alt",
  "asterisk-o",
  "at",
  "balance-scale",
  "ban",
  "bandcamp",
  "bank",
  "barcode",
  "bars",
  "bath",
  "battery",
  "battery-empty",
  "battery-half",
  "battery-quarter",
  "battery-three-quarters",
  "bed",
  "beer",
  "bin",
  "bin-alt",
  "binoculars",
  "birthday-cake",
  "bluetooth",
  "bluetooth-b",
  "bolt",
  "bomb",
  "book",
  "book-download",
  "book-excel",
  "book-help",
  "book-x",
  "bookmark",
  "bookmark-o",
  "briefcase",
  "bug",
  "building",
  "bullhorn",
  "bullseye",
  "calculator",
  "calendar",
  "calendar-check-o",
  "calendar-date",
  "calendar-end",
  "calendar-minus-o",
  "calendar-o",
  "calendar-plus-o",
  "calendar-progress",
  "calendar-start",
  "calendar-times-o",
  "calendar-warning",
  "call",
  "call-alt",
  "camera",
  "camera-retro",
  "cellular-network",
  "certificate",
  "check",
  "check-circle",
  "check-circle-o",
  "check-square",
  "check-square-o",
  "check-square-o-alt",
  "child",
  "child-alt",
  "circle",
  "circle-o",
  "circle-o-notch",
  "circle-thin",
  "clear",
  "clock-o",
  "close",
  "close-circle",
  "close-circle-o",
  "cloud",
  "cloud-download",
  "cloud-upload",
  "code",
  "code-editor",
  "code-fork",
  "coffee",
  "cog",
  "cogs",
  "collapse-group",
  "compare-git",
  "compass",
  "components",
  "compress",
  "compress-alt",
  "copyright",
  "create-scene",
  "create-task",
  "credit-card",
  "credit-card-alt",
  "crop",
  "crosshairs",
  "cube",
  "cubes",
  "cup",
  "cutlery",
  "dashboard",
  "designer",
  "desktop",
  "desktop-alt",
  "desktop-cloud",
  "desktop-cog",
  "desktop-heart",
  "deviation",
  "diamond",
  "diversity",
  "doctor-female",
  "doctor-male",
  "dot-circle-o",
  "download",
  "drawing-compass",
  "drivers-license",
  "ellipsis-h",
  "ellipsis-v",
  "empire",
  "envelope",
  "envelope-o",
  "envelope-open-o",
  "envelope-square",
  "excel",
  "exchange",
  "exclamation",
  "exclamation-circle",
  "exclamation-triangle",
  "execute",
  "expand",
  "expand-alt",
  "expand-group",
  "expand-nodes",
  "export",
  "external-link",
  "external-link-square",
  "eye",
  "eye-slash",
  "factory-setting",
  "falling",
  "favorite-download",
  "fax",
  "female",
  "female-alt",
  "female-o",
  "filter",
  "filter-check",
  "filter-ext",
  "filter-lock",
  "fire",
  "fire-extinguisher",
  "flag",
  "flag-checkered",
  "flag-edge",
  "flag-o",
  "flag-triangle",
  "flame",
  "flash",
  "flask",
  "focus-center",
  "focus-center-alt",
  "focus-lock",
  "folder",
  "folder-add",
  "folder-add-alt",
  "folder-open",
  "folder-open-o",
  "frown",
  "full-screen",
  "full-screen-alt",
  "full-screen-exit",
  "futbol-o",
  "gamepad",
  "gavel",
  "ge",
  "gear",
  "gears",
  "geo-marker",
  "geo-marker-o",
  "gift",
  "glass",
  "globe",
  "graduation-cap",
  "grid",
  "grid-alt",
  "group",
  "groups",
  "h-square",
  "hashtag",
  "hashtag-alt",
  "hdd-o",
  "headphones",
  "heart",
  "heart-o",
  "heartbeat",
  "height",
  "hide",
  "hierarchy",
  "history",
  "home",
  "home-alt",
  "hospital-o",
  "hotel",
  "hourglass",
  "hourglass-end",
  "hourglass-o",
  "hourglass-start",
  "i-cursor",
  "id-badge",
  "id-card",
  "image",
  "inbox",
  "industry",
  "industry-alt",
  "info",
  "info-circle",
  "institution",
  "italic",
  "key",
  "key-alt",
  "keyboard-o",
  "language",
  "laptop",
  "layout",
  "lead-time",
  "leaf",
  "life-bouy",
  "lightbulb-glow",
  "lightbulb-o",
  "link",
  "location-arrow",
  "lock",
  "lock-alt",
  "lock-filter",
  "lock-hole",
  "lock-open",
  "lock-open-alt",
  "logical-group",
  "loss",
  "magic",
  "magnet",
  "mail-forward",
  "mail-new",
  "mail-o9",
  "mail-reply",
  "mail-reply-all",
  "mail-write",
  "male",
  "male-alt",
  "male-o",
  "map",
  "map-marker",
  "map-pin",
  "map-signs",
  "measure-tools",
  "medkit",
  "meh",
  "merge-git",
  "merge-up",
  "microchip",
  "microphone",
  "microphone-slash",
  "minus",
  "minus-circle",
  "minus-circle-o",
  "minus-square",
  "minus-square-o",
  "missed-call",
  "mobile",
  "mobile-alt",
  "mobile-phone",
  "monitor",
  "moon-o",
  "moon-star",
  "mouse-pointer",
  "network-collapse",
  "network-expand",
  "network-nodes",
  "newspaper-o",
  "no-call",
  "no-edit",
  "notes",
  "notification",
  "o9-circle",
  "o9-logo",
  "object-group",
  "object-ungroup",
  "old",
  "omni-direction-alt",
  "online",
  "open-new",
  "paint-brush",
  "paper-plane",
  "paper-plane-land",
  "paper-plane-o",
  "paper-plane-send",
  "pdf-download",
  "performance-monitor",
  "phone",
  "phone-book",
  "phone-square",
  "photo",
  "photo-o",
  "picture",
  "picture-o",
  "pipeline",
  "play-presentation",
  "plug",
  "plus",
  "plus-circle",
  "plus-circle-o",
  "plus-square",
  "plus-square-o",
  "power-off",
  "presentation",
  "print",
  "printer",
  "priority-edge",
  "process",
  "pull-request",
  "push-pin",
  "puzzle-piece",
  "qrcode",
  "question",
  "question-circle",
  "quote-left",
  "quote-right",
  "recycle",
  "redo",
  "refresh",
  "registered",
  "registered-trademark",
  "remove",
  "rename",
  "report-config",
  "respread",
  "respread-alt",
  "retweet",
  "retweet-alt",
  "rising",
  "road",
  "rotate-90",
  "rss",
  "rss-square",
  "save",
  "scatter-plot",
  "scenario",
  "search",
  "search-minus",
  "search-plus",
  "send",
  "send-o",
  "setting-edit",
  "share",
  "share-alt",
  "share-alt-square",
  "share-circle",
  "share-square",
  "share-square-o",
  "shield",
  "shopping-bag",
  "shopping-basket",
  "show",
  "show-view",
  "shower",
  "shrink-corners",
  "shrink-nodes",
  "shuffle",
  "sign-in",
  "sign-out",
  "signal",
  "signal-alt",
  "size",
  "slack",
  "sliders",
  "smile",
  "snowflake",
  "spinner",
  "split-up",
  "square",
  "square-o",
  "square-square-o",
  "stack",
  "stack-exchange",
  "stack-overflow",
  "stacked-bar-h",
  "stacked-bar-v",
  "star",
  "star-half",
  "star-half-empty",
  "star-half-full",
  "star-half-o",
  "star-o",
  "states",
  "stethoscope",
  "sticky-note-o",
  "stop-watch",
  "street-view",
  "suitcase",
  "sun-o",
  "superpowers",
  "support",
  "support-ticket",
  "swipe-right",
  "tablet",
  "tag",
  "tags",
  "target",
  "tasks",
  "telephone",
  "template",
  "tenant",
  "terminal",
  "thermometer",
  "thermometer-empty",
  "thermometer-full",
  "thermometer-half",
  "thermometer-quarter",
  "thermometer-three-quarters",
  "thumb-tack",
  "thumb-tack-alt",
  "ticket",
  "ticket-add",
  "tile-layout",
  "times-circle",
  "times-circle-o",
  "times-square",
  "times-square-o",
  "toggle-down",
  "toggle-left",
  "toggle-off",
  "toggle-on",
  "toggle-right",
  "toggle-up",
  "tools",
  "trademark",
  "transform",
  "trash",
  "trash-o",
  "trophy",
  "umbrella",
  "umbrella-rain",
  "unlink",
  "upload",
  "usb",
  "user",
  "user-edit",
  "user-management",
  "user-plus",
  "user-setting",
  "user-times",
  "users",
  "users-alt",
  "video",
  "view-report",
  "warning",
  "webhook",
  "webhook-o",
  "wifi",
  "window-close",
  "window-maximize",
  "window-minimize",
  "window-restore",
  "wrench",
  "zoom-in",
  "zoom-out"
]

var editor = [
  "align-center",
  "align-justify",
  "align-left",
  "align-right",
  "background-color",
  "bold",
  "bulk-edit",
  "chain",
  "chain-broken",
  "clipboard",
  "color",
  "columns",
  "copy",
  "cut",
  "decrease-font",
  "dedent",
  "duplicate",
  "edit",
  "edit-cell",
  "edit-column",
  "edit-properties",
  "edit-row",
  "eraser",
  "eyedropper",
  "floppy-o",
  "font",
  "font-color",
  "header",
  "increase-font",
  "indent",
  "italic",
  "length",
  "list",
  "list-alt",
  "list-ol",
  "list-ul",
  "outdent",
  "paperclip",
  "paragraph",
  "paste",
  "pencil",
  "pencil-square",
  "pencil-square-o",
  "rotate-left",
  "rotate-right",
  "ruler",
  "scissors",
  "strikethrough",
  "subscript",
  "superscript",
  "table",
  "table-column",
  "table-row",
  "tape",
  "text",
  "text-height",
  "text-width",
  "th",
  "th-large",
  "tint",
  "underline",
  "undo",
  "width"
]

var data = [
  "area-chart",
  "area-chart-alt",
  "area-chart-xy",
  "bar-chart",
  "bar-chart-h",
  "bar-chart-o",
  "bar-chart-v",
  "bell-curve",
  "bell-o",
  "bell-slash",
  "blockchain",
  "chart-progress",
  "combo-chart",
  "combo-chart-alt",
  "data-management",
  "database",
  "database-admin",
  "database-alt",
  "database-encryption",
  "database-protection",
  "database-search",
  "doughnut-chart",
  "flow-chart",
  "heatmap",
  "line-chart",
  "line-chart-alt",
  "maslow-pyramid",
  "max-val",
  "min-val",
  "mind-map",
  "normal-distribution",
  "pie-chart",
  "pie-chart-alt",
  "profit",
  "profit-flag",
  "sitemap",
  "sort-12-up",
  "sort-21-up",
  "sort-alpha-asc",
  "sort-alpha-desc",
  "sort-amount-asc",
  "sort-amount-desc",
  "sort-asc-up",
  "sort-az-up",
  "sort-down",
  "sort-dsc-up",
  "sort-numeric-asc",
  "sort-numeric-desc",
  "sort-za-up",
  "timeline",
  "timeline-h",
  "timeline-v",
  "tornado",
  "tree-structure",
  "tree-view"
]

var files = [

  "file",
  "file-add",
  "file-archive-o",
  "file-audio-o",
  "file-bookmark",
  "file-cabinet",
  "file-code-o",
  "file-excel-o",
  "file-favorite",
  "file-image-o",
  "file-movie-o",
  "file-music-o",
  "file-o",
  "file-pdf-o",
  "file-photo-o",
  "file-picture-o",
  "file-powerpoint-o",
  "file-script",
  "file-setting",
  "file-sound-o",
  "file-stats",
  "file-text",
  "file-text-o",
  "file-video-o",
  "file-word-o",
  "files",
  "files-copy",
  "files-o"
]

var chat = [
  "comment",
  "comment-add",
  "comment-check",
  "comment-copy",
  "comment-cross",
  "comment-empty",
  "comment-help",
  "comment-help-alt",
  "comment-line",
  "comment-new",
  "comment-o",
  "comment-quote",
  "comment-text",
  "commenting",
  "commenting-alt",
  "commenting-o",
  "comments",
  "comments-alt",
  "comments-o"
]

var media = [
  "backward",
  "eject",
  "eject-circle",
  "eject-square",
  "fast-backward",
  "fast-forward",
  "fast-forward-circle",
  "fast-forward-square",
  "film",
  "forward",
  "insert",
  "insert-circle",
  "insert-square",
  "music",
  "mute",
  "next",
  "next-circle",
  "next-square",
  "pause",
  "pause-circle",
  "pause-square",
  "play",
  "play-circle",
  "play-circle-o",
  "play-square",
  "prev",
  "prev-circle",
  "prev-square",
  "random",
  "record",
  "record-circle",
  "record-square",
  "repeat",
  "repeat-all",
  "repeat-alt",
  "repeat-one",
  "repeat-one-alt",
  "resume",
  "resume-circle",
  "resume-square",
  "rewind-circle",
  "rewind-square",
  "speaker",
  "spreaker-translate",
  "step-backward",
  "step-forward",
  "stop",
  "stop-circle",
  "stop-square",
  "video-rec",
  "volume-down",
  "volume-high",
  "volume-low",
  "volume-mid",
  "volume-mute",
  "volume-up"
]

var hand = [
  "hand-clap",
  "hand-grab-o",
  "hand-lizard-o",
  "hand-o-down",
  "hand-o-left",
  "hand-o-right",
  "hand-o-up",
  "hand-paper-o",
  "hand-peace-o",
  "hand-pointer-o",
  "hand-rock-o",
  "hand-scissors-o",
  "hand-spock-o",
  "hand-stop-o",
  "handshake-o",
  "thumbs-down",
  "thumbs-o-down",
  "thumbs-o-up",
  "thumbs-up"
]

var transport = [
  "ambulance",
  "automobile",
  "bicycle",
  "bus",
  "cab",
  "car",
  "cart-arrow-down",
  "cart-plus",
  "fighter-jet",
  "motorcycle",
  "plane",
  "rocket",
  "ship",
  "shopping-cart",
  "space-shuttle",
  "subway",
  "taxi",
  "train",
  "truck"
]

var currency = [
  "btc",
  "cny",
  "dollar",
  "eur",
  "euro",
  "gbp",
  "gg",
  "gg-circle",
  "ils",
  "inr",
  "jpy",
  "krw",
  "money",
  "rub",
  "try",
  "viacoin"
]

var accessibility = [
  "american-sign-language-interpreting",
  "asl-interpreting",
  "assistive-listening-systems",
  "blind",
  "braille",
  "cc",
  "cc-o",
  "deaf",
  "low-vision",
  "question-circle",
  "tty",
  "universal-access",
  "volume-control-phone",
  "wheelchair",
  "wheelchair-alt"
]

var new_alias = [
  "bitcoin",
  "feed",
  "genderless",
  "intersex",
  "mars",
  "mortar-board",
  "navicon",
  "reorder",
  "rmb",
  "rouble",
  "ruble",
  "rupee",
  "server",
  "shekel",
  "sheqel",
  "soccer-ball-o",
  "sort-asc",
  "sort-desc",
  "sort-down",
  "sort-up",
  "tachometer",
  "university",
  "unlock",
  "unlock-alt",
  "unsorted",
  "usd",
  "user-md",
  "venus",
  "volume-off",
  "yen"
]

var new_icons = [
  "collapse-up",
  "collapse-down",
  "minus-plus",
  "plus-minus",
  "plus-minus-alt",
  "select-check",
  "left-right",
  "unlock-full",
  "waterfall-chart",
  "package",
  "open-parcel",
  "packing",
  "unpacking",
  "supply",
  "supplier",
  "warehouse",
  "store",
  "store-cart",
  "manufacturing-plant",
  "building-manufacture",
  "resource-manufacture",
  "delivery",
  "delivery-truck",
  "delivery-store",
  "network-node",
  "hexagon-shape",
  "select-area",
  "edge-alt",
  "triangle-shape",
  "circle-shape",
  "diamond-shape",
  "legend",
  "edge",
  "airport-tower",
  "control-tower",
  "control-room",
  "legal",
  "mars-double",
  "mars-stroke",
  "mars-stroke-h",
  "mars-stroke-v",
  "mercury",
  "neuter",
  "no-video",
  "paw",
  "spoon",
  "th-list",
  "transgender",
  "transgender-alt",
  "tree",
  "user-secret",
  "venus-double",
  "venus-mars",
  "video-camera",
]