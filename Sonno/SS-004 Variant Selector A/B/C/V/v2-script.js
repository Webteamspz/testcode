convert.$(document).ready(function () {
    if (!convert.$('body').hasClass('sonno-test')) {
        convert.$('body').addClass('sonno-test');
        loadTest();
    }
    function loadTest() {
        var width = window.innerWidth;
        var tabs = `<div class="custom-ele"><div class="custom-ele-wrapper"><div class="custom-tab-wrapper"><ul class="tab-list"><li data-val='color-section' class='active'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><g clip-path="url(#clip0_398_17540)"><path d="M17.9577 0.328091C17.409 0.329817 16.8585 0.355406 16.3063 0.407742C8.13369 1.18258 1.47621 7.63827 0.474347 15.7565C-0.202622 21.2456 1.634 26.6163 5.51094 30.4945C8.86044 33.844 13.3236 35.6718 18.0134 35.6718C18.7544 35.6718 19.5 35.6276 20.249 35.5338C28.1021 34.5672 34.5308 28.1604 35.5313 20.3045C35.5939 19.8206 35.6357 19.3387 35.6588 18.8602C35.724 17.5117 35.1947 16.1839 34.2065 15.2228C33.2454 14.2875 31.944 13.8081 30.6593 13.9059C30.136 13.9494 29.5836 13.8999 29.0372 13.7599C27.3773 13.333 26.0579 11.9686 25.6733 10.2897C25.453 9.32734 25.5179 8.35369 25.8591 7.47012C26.3783 6.1257 26.3184 4.63595 25.6945 3.38668C25.1045 2.20539 24.0794 1.3561 22.8084 0.9945C21.2292 0.54489 19.6039 0.322929 17.9577 0.328091ZM18.0161 1.68747C19.5169 1.68747 20.9985 1.8916 22.4367 2.30077C23.3366 2.55634 24.0611 3.15867 24.4784 3.99469C24.9311 4.90275 24.9719 5.98931 24.59 6.97894C24.1523 8.11677 24.067 9.36627 24.3484 10.5924C24.8445 12.762 26.5508 14.5209 28.6973 15.0741H28.7C29.3905 15.2508 30.086 15.3102 30.7629 15.2626C31.6832 15.1892 32.5776 15.5364 33.2586 16.1998C33.9669 16.8904 34.3469 17.8355 34.3021 18.7938C34.279 19.2369 34.2397 19.6806 34.1826 20.1319C33.2582 27.3815 27.3286 33.2933 20.0817 34.185C15.0044 34.8036 10.0513 33.1126 6.47206 29.5334C2.8914 25.9542 1.19915 20.9942 1.8231 15.9237C2.74748 8.43222 8.89194 2.47678 16.4337 1.76446C16.9625 1.71416 17.49 1.68747 18.0161 1.68747ZM18.6878 3.04684C16.8133 3.04684 15.2894 4.5707 15.2894 6.44528C15.2894 8.31987 16.8133 9.84372 18.6878 9.84372C20.5624 9.84372 22.0863 8.31987 22.0863 6.44528C22.0863 4.5707 20.5624 3.04684 18.6878 3.04684ZM18.6878 4.40621C19.812 4.40621 20.7269 5.32108 20.7269 6.44528C20.7269 7.56949 19.812 8.48434 18.6878 8.48434C17.5637 8.48434 16.6488 7.56949 16.6488 6.44528C16.6488 5.32108 17.5637 4.40621 18.6878 4.40621ZM10.5316 7.12497C8.65704 7.12497 7.13316 8.64882 7.13316 10.5234C7.13316 12.398 8.65704 13.9218 10.5316 13.9218C12.4061 13.9218 13.9301 12.398 13.9301 10.5234C13.9301 8.64882 12.4061 7.12497 10.5316 7.12497ZM10.5316 8.48434C11.6558 8.48434 12.5707 9.39919 12.5707 10.5234C12.5707 11.6476 11.6558 12.5625 10.5316 12.5625C9.40742 12.5625 8.49257 11.6476 8.49257 10.5234C8.49257 9.39919 9.40742 8.48434 10.5316 8.48434ZM18.6878 12.5625C16.0643 12.5625 13.9301 14.6967 13.9301 17.3202C13.9301 19.9439 16.0643 22.0781 18.6878 22.0781C21.3114 22.0781 23.4457 19.9439 23.4457 17.3202C23.4457 14.6967 21.3114 12.5625 18.6878 12.5625ZM18.6878 13.9218C20.5624 13.9218 22.0863 15.4457 22.0863 17.3202C22.0863 19.1949 20.5624 20.7187 18.6878 20.7187C16.8133 20.7187 15.2894 19.1949 15.2894 17.3202C15.2894 15.4457 16.8133 13.9218 18.6878 13.9218ZM7.81284 15.2812C5.93827 15.2812 4.41441 16.8051 4.41441 18.6796C4.41441 20.5542 5.93827 22.0781 7.81284 22.0781C9.68739 22.0781 11.2113 20.5542 11.2113 18.6796C11.2113 16.8051 9.68739 15.2812 7.81284 15.2812ZM7.81284 16.6406C8.93702 16.6406 9.85194 17.5554 9.85194 18.6796C9.85194 19.8039 8.93702 20.7187 7.81284 20.7187C6.68865 20.7187 5.77379 19.8039 5.77379 18.6796C5.77379 17.5554 6.68865 16.6406 7.81284 16.6406ZM28.2035 19.3593C26.3289 19.3593 24.8051 20.8832 24.8051 22.7577C24.8051 24.6324 26.3289 26.1562 28.2035 26.1562C30.078 26.1562 31.6019 24.6324 31.6019 22.7577C31.6019 20.8832 30.078 19.3593 28.2035 19.3593ZM28.2035 20.7187C29.3276 20.7187 30.2426 21.6336 30.2426 22.7577C30.2426 23.882 29.3276 24.7968 28.2035 24.7968C27.0793 24.7968 26.1644 23.882 26.1644 22.7577C26.1644 21.6336 27.0793 20.7187 28.2035 20.7187ZM11.891 23.4375C10.0164 23.4375 8.49257 24.9613 8.49257 26.8359C8.49257 28.7105 10.0164 30.2343 11.891 30.2343C13.7655 30.2343 15.2894 28.7105 15.2894 26.8359C15.2894 24.9613 13.7655 23.4375 11.891 23.4375ZM11.891 24.7968C13.0151 24.7968 13.9301 25.7117 13.9301 26.8359C13.9301 27.9601 13.0151 28.875 11.891 28.875C10.7668 28.875 9.85194 27.9601 9.85194 26.8359C9.85194 25.7117 10.7668 24.7968 11.891 24.7968ZM21.4066 24.7968C19.532 24.7968 18.0082 26.3207 18.0082 28.1952C18.0082 30.0699 19.532 31.5937 21.4066 31.5937C23.2811 31.5937 24.8051 30.0699 24.8051 28.1952C24.8051 26.3207 23.2811 24.7968 21.4066 24.7968ZM21.4066 26.1562C22.5308 26.1562 23.4457 27.0711 23.4457 28.1952C23.4457 29.3195 22.5308 30.2343 21.4066 30.2343C20.2824 30.2343 19.3676 29.3195 19.3676 28.1952C19.3676 27.0711 20.2824 26.1562 21.4066 26.1562Z" fill="rgb(20, 50, 75)" /></g><defs><clipPath id="clip0_398_17540"><rect width="36" height="36" fill="white" /></clipPath></defs></svg><div class="text-content"><h4 class="colorDesc">Colour</h4><h6 class="desc">Silver Chenille </h6></div></li><li data-val='size-section'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><g clip-path="url(#clip0_398_17545)"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.7968 30.3893L1.18516 1.1911L1.18515 30.3893H34.7968ZM1.96103 0.292457C1.19348 -0.374312 1.72158e-05 0.172598 1.66575e-05 1.1911L0 30.3893C0 31.0458 0.530609 31.5781 1.18515 31.5781H34.7968C35.8942 31.5781 36.4022 30.2112 35.5727 29.4907L1.96103 0.292457Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M8.88875 16.6906V22.365H15.2528L8.88875 16.6906ZM8.68988 14.9227C8.30771 14.582 7.70361 14.8541 7.70361 15.367V22.9594C7.70361 23.2876 7.96894 23.5538 8.29618 23.5538H16.8113C17.3562 23.5538 17.6123 22.8782 17.205 22.5151L8.68988 14.9227Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M9.48124 27.7145C9.80855 27.7145 10.0738 27.9806 10.0738 28.3089V30.6865C10.0738 31.0148 9.80855 31.2809 9.48124 31.2809C9.154 31.2809 8.88867 31.0148 8.88867 30.6865V28.3089C8.88867 27.9806 9.154 27.7145 9.48124 27.7145Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.09935C0 7.77108 0.265305 7.50494 0.592575 7.50494H2.96287C3.29015 7.50494 3.55545 7.77108 3.55545 8.09935C3.55545 8.42761 3.29015 8.69375 2.96287 8.69375H0.592575C0.265305 8.69375 0 8.42761 0 8.09935Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0369 27.7145C13.3642 27.7145 13.6295 27.9806 13.6295 28.3089V30.6865C13.6295 31.0148 13.3642 31.2809 13.0369 31.2809C12.7097 31.2809 12.4443 31.0148 12.4443 30.6865V28.3089C12.4443 27.9806 12.7097 27.7145 13.0369 27.7145Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M0.0263672 11.6656C0.0263672 11.3374 0.291672 11.0712 0.618942 11.0712H2.98924C3.31651 11.0712 3.58182 11.3374 3.58182 11.6656C3.58182 11.9939 3.31651 12.26 2.98924 12.26H0.618942C0.291672 12.26 0.0263672 11.9939 0.0263672 11.6656Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5921 27.7145C16.9194 27.7145 17.1846 27.9806 17.1846 28.3089V30.6865C17.1846 31.0148 16.9194 31.2809 16.5921 31.2809C16.2648 31.2809 15.9995 31.0148 15.9995 30.6865V28.3089C15.9995 27.9806 16.2648 27.7145 16.5921 27.7145Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M0.0527344 15.232C0.0527344 14.9036 0.318039 14.6376 0.645309 14.6376H3.01561C3.34288 14.6376 3.60818 14.9036 3.60818 15.232C3.60818 15.5602 3.34288 15.8264 3.01561 15.8264H0.645309C0.318039 15.8264 0.0527344 15.5602 0.0527344 15.232Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1473 27.7145C20.4746 27.7145 20.7399 27.9806 20.7399 28.3089V30.6865C20.7399 31.0148 20.4746 31.2809 20.1473 31.2809C19.82 31.2809 19.5547 31.0148 19.5547 30.6865V28.3089C19.5547 27.9806 19.82 27.7145 20.1473 27.7145Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M0.0791016 18.7983C0.0791016 18.47 0.344406 18.2039 0.671677 18.2039H3.04198C3.36924 18.2039 3.63455 18.47 3.63455 18.7983C3.63455 19.1265 3.36924 19.3927 3.04198 19.3927H0.671677C0.344406 19.3927 0.0791016 19.1265 0.0791016 18.7983Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M23.7029 27.7145C24.0302 27.7145 24.2955 27.9806 24.2955 28.3089V30.6865C24.2955 31.0148 24.0302 31.2809 23.7029 31.2809C23.3757 31.2809 23.1104 31.0148 23.1104 30.6865V28.3089C23.1104 27.9806 23.3757 27.7145 23.7029 27.7145Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M0.10498 22.3645C0.10498 22.0362 0.370286 21.7701 0.697556 21.7701H3.06786C3.39512 21.7701 3.66043 22.0362 3.66043 22.3645C3.66043 22.6928 3.39512 22.9589 3.06786 22.9589H0.697556C0.370286 22.9589 0.10498 22.6928 0.10498 22.3645Z" fill="#14324B" /></g><defs><clipPath id="clip0_398_17545"><rect width="36" height="36" fill="white" /></clipPath></defs></svg><div class="text-content"><h4 class="sizeBased">Size</h4><h6 class="desc">Small Single 2FT6 </h6></div></li><li data-val='storage-section'><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><g clip-path="url(#clip0_398_17561)"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.9422 0.907459H4.04886C3.71759 0.907459 3.44905 1.17831 3.44905 1.51243V34.4834C3.44905 34.8175 3.71759 35.0883 4.04886 35.0883H25.9422C26.2736 35.0883 26.5421 34.8175 26.5421 34.4834V1.51243C26.5421 1.17831 26.2736 0.907459 25.9422 0.907459ZM4.04886 0C3.22069 0 2.54932 0.677135 2.54932 1.51243V34.4834C2.54932 35.3186 3.22069 35.9958 4.04886 35.9958H25.9422C26.7704 35.9958 27.4418 35.3186 27.4418 34.4834V1.51243C27.4418 0.677135 26.7704 0 25.9422 0H4.04886Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M28.9413 21.4765H27.4417V29.0386H28.9413V21.4765ZM26.542 20.569V29.946H29.841V20.569H26.542Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M28.9413 9.67954H27.4417V17.2417H28.9413V9.67954ZM26.542 8.77203V18.1491H29.841V8.77203H26.542Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M2.54918 21.4765H1.04963V29.0386H2.54918V21.4765ZM0.149902 20.569V29.946H3.44891V20.569H0.149902Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M2.54918 9.67954H1.04963V17.2417H2.54918V9.67954ZM0.149902 8.77203V18.1491H3.44891V8.77203H0.149902Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5457 0.907459H4.04886C3.71759 0.907459 3.44905 1.17831 3.44905 1.51243V6.35221H14.5457V0.907459ZM4.04886 0C3.22069 0 2.54932 0.677135 2.54932 1.51243V7.25965H15.4454V0H4.04886Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M25.942 0.907459H15.4451V6.35221H26.5418V1.51243C26.5418 1.17831 26.2732 0.907459 25.942 0.907459ZM14.5454 0V7.25965H27.4415V1.51243C27.4415 0.677135 26.7702 0 25.942 0H14.5454Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M29.5412 7.71338C29.7897 7.71338 29.991 7.91652 29.991 8.1671V18.4516C29.991 18.7022 29.7897 18.9053 29.5412 18.9053C29.2927 18.9053 29.0913 18.7022 29.0913 18.4516V8.1671C29.0913 7.91652 29.2927 7.71338 29.5412 7.71338Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M29.5412 19.8128C29.7897 19.8128 29.991 20.0159 29.991 20.2665V30.551C29.991 30.8016 29.7897 31.0048 29.5412 31.0048C29.2927 31.0048 29.0913 30.8016 29.0913 30.551V20.2665C29.0913 20.0159 29.2927 19.8128 29.5412 19.8128Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M0.449864 19.8128C0.698318 19.8128 0.899729 20.0159 0.899729 20.2665V30.551C0.899729 30.8016 0.698318 31.0048 0.449865 31.0048C0.201411 31.0048 4.56582e-07 30.8016 4.45722e-07 30.551L0 20.2665C-1.08603e-08 20.0159 0.201411 19.8128 0.449864 19.8128Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M0.449864 7.71338C0.698318 7.71338 0.899729 7.91652 0.899729 8.1671V18.4516C0.899729 18.7022 0.698318 18.9053 0.449865 18.9053C0.201411 18.9053 4.56582e-07 18.7022 4.45722e-07 18.4516L0 8.1671C-1.08603e-08 7.91652 0.201411 7.71338 0.449864 7.71338Z" fill="#14324B" /></g><defs><clipPath id="clip0_398_17561"><rect width="36" height="36" fill="white" /></clipPath></defs></svg><div class="text-content"><h4 class="storageBased">Storage </h4><h6 class="desc">No Storage </h6></div></li><li data-val='headboard-section'><svg xmlns="http://www.w3.org/2000/svg" width="38" height="31" viewBox="0 0 38 31" fill="none"><g clip-path="url(#clip0_398_17576)"><path fill-rule="evenodd" clip-rule="evenodd" d="M32.0674 4.63419C32.2213 4.47311 32.4161 4.29313 32.6498 4.12334C33.308 3.6452 34.2952 3.23795 35.5198 3.59319C36.7307 3.94445 37.3636 4.75591 37.6783 5.48797C37.8323 5.84603 37.9086 6.17977 37.9469 6.42461C37.9662 6.5477 37.9761 6.65038 37.9812 6.72512C37.9838 6.76255 37.9852 6.79318 37.9859 6.81607C37.9863 6.82753 37.9865 6.83707 37.9866 6.84458L37.9868 6.85432V6.85959C37.9868 6.85992 37.9868 6.86095 37.4198 6.86095H37.9868V30.2344H0V6.86095H0.566967C0 6.86095 -3.04145e-07 6.86133 0 6.86095L1.68969e-06 6.85943L7.33327e-06 6.8577L3.44021e-05 6.85359L0.000178026 6.84289C0.00032361 6.83467 0.00058264 6.82426 0.00103653 6.81181C0.00194375 6.78693 0.00363308 6.75376 0.00676583 6.71335C0.0130196 6.63269 0.025097 6.52224 0.0484856 6.39052C0.0950228 6.12844 0.1879 5.7734 0.375009 5.3995C0.761331 4.62749 1.52101 3.83657 2.92955 3.58069C4.11305 3.3657 5.07158 3.76163 5.71906 4.19663C5.94696 4.34974 6.13883 4.50913 6.29217 4.65177C6.39202 4.54941 6.50972 4.43357 6.64575 4.30707C7.15897 3.82981 7.93334 3.20067 8.99488 2.57102C11.121 1.30988 14.3859 0.0546075 18.9873 0.00162288C23.5948 -0.0514316 26.9641 1.20506 29.1908 2.48985C30.3027 3.13139 31.1274 3.77854 31.6778 4.26997C31.828 4.404 31.9577 4.5265 32.0674 4.63419ZM1.13394 6.86523V29.0127H36.8528V6.86468V6.86312V6.86213L36.8527 6.85874C36.8524 6.85081 36.8518 6.83608 36.8504 6.81537C36.8476 6.77382 36.8414 6.70903 36.8287 6.62746C36.803 6.46298 36.7514 6.23858 36.6494 6.00138C36.4523 5.54295 36.0615 5.01541 35.225 4.77278C34.4023 4.53412 33.7516 4.79636 33.2837 5.13619C33.0472 5.30802 32.8625 5.49708 32.7374 5.64328C32.6752 5.71586 32.6291 5.77639 32.5997 5.81674C32.5851 5.83688 32.5747 5.85184 32.5688 5.8606C32.5659 5.86489 32.564 5.86768 32.5633 5.86885C32.5633 5.86883 32.5633 5.86887 32.5633 5.86885L32.1525 6.5151L31.6718 5.92653L31.6714 5.9259L31.6655 5.91905C31.6598 5.91224 31.6501 5.90087 31.6364 5.88524C31.609 5.85398 31.5656 5.80571 31.5061 5.74285C31.3871 5.61713 31.2037 5.4332 30.9543 5.21056C30.4555 4.76523 29.6933 4.16553 28.6555 3.56671C26.5828 2.37077 23.4005 1.17247 18.9994 1.22314C14.5923 1.27389 11.5104 2.47342 9.54181 3.64113C8.55594 4.22591 7.84597 4.80472 7.38668 5.2318C7.15703 5.44536 6.9901 5.62094 6.88278 5.74028C6.82912 5.79995 6.79037 5.84554 6.76616 5.87476C6.75405 5.88937 6.74558 5.89988 6.74069 5.90601L6.73606 5.91186C6.73588 5.91209 6.73597 5.91198 6.73606 5.91186L6.29073 6.49262L5.85704 5.90371C5.85727 5.90402 5.85739 5.90417 5.85704 5.90371L5.85131 5.89629C5.84533 5.88863 5.83482 5.87543 5.81992 5.85756C5.79007 5.82176 5.74291 5.76764 5.67946 5.70213C5.55195 5.57045 5.36237 5.39667 5.11903 5.23317C4.6335 4.90697 3.95412 4.6334 3.11809 4.78528C2.06979 4.97571 1.60103 5.52377 1.37314 5.97918C1.25314 6.21898 1.19247 6.44974 1.16222 6.62004C1.14722 6.70452 1.14011 6.7719 1.13677 6.81503C1.1351 6.83651 1.13439 6.85173 1.1341 6.85975L1.13394 6.86523Z" fill="#14324B" /><path d="M6.92638 15.7664C6.92638 16.3016 6.49252 16.7354 5.95733 16.7354C5.42214 16.7354 4.98828 16.3016 4.98828 15.7664C4.98828 15.2311 5.42214 14.7973 5.95733 14.7973C6.49252 14.7973 6.92638 15.2311 6.92638 15.7664Z" fill="#14324B" /><path d="M13.5328 15.7664C13.5328 16.3016 13.0989 16.7354 12.5638 16.7354C12.0286 16.7354 11.5947 16.3016 11.5947 15.7664C11.5947 15.2311 12.0286 14.7973 12.5638 14.7973C13.0989 14.7973 13.5328 15.2311 13.5328 15.7664Z" fill="#14324B" /><path d="M20.1393 15.7664C20.1393 16.3016 19.7054 16.7354 19.1702 16.7354C18.6351 16.7354 18.2012 16.3016 18.2012 15.7664C18.2012 15.2311 18.6351 14.7973 19.1702 14.7973C19.7054 14.7973 20.1393 15.2311 20.1393 15.7664Z" fill="#14324B" /><path d="M26.7457 15.7664C26.7457 16.3016 26.3118 16.7354 25.7767 16.7354C25.2414 16.7354 24.8076 16.3016 24.8076 15.7664C24.8076 15.2311 25.2414 14.7973 25.7767 14.7973C26.3118 14.7973 26.7457 15.2311 26.7457 15.7664Z" fill="#14324B" /><path d="M33.3522 15.7664C33.3522 16.3016 32.9183 16.7354 32.3831 16.7354C31.848 16.7354 31.4141 16.3016 31.4141 15.7664C31.4141 15.2311 31.848 14.7973 32.3831 14.7973C32.9183 14.7973 33.3522 15.2311 33.3522 15.7664Z" fill="#14324B" /><path d="M6.92638 21.0857C6.92638 21.6209 6.49252 22.0548 5.95733 22.0548C5.42214 22.0548 4.98828 21.6209 4.98828 21.0857C4.98828 20.5505 5.42214 20.1167 5.95733 20.1167C6.49252 20.1167 6.92638 20.5505 6.92638 21.0857Z" fill="#14324B" /><path d="M13.5328 21.0857C13.5328 21.6209 13.0989 22.0548 12.5638 22.0548C12.0286 22.0548 11.5947 21.6209 11.5947 21.0857C11.5947 20.5505 12.0286 20.1167 12.5638 20.1167C13.0989 20.1167 13.5328 20.5505 13.5328 21.0857Z" fill="#14324B" /><path d="M20.1393 21.0857C20.1393 21.6209 19.7054 22.0548 19.1702 22.0548C18.6351 22.0548 18.2012 21.6209 18.2012 21.0857C18.2012 20.5505 18.6351 20.1167 19.1702 20.1167C19.7054 20.1167 20.1393 20.5505 20.1393 21.0857Z" fill="#14324B" /><path d="M26.7457 21.0857C26.7457 21.6209 26.3118 22.0548 25.7767 22.0548C25.2414 22.0548 24.8076 21.6209 24.8076 21.0857C24.8076 20.5505 25.2414 20.1167 25.7767 20.1167C26.3118 20.1167 26.7457 20.5505 26.7457 21.0857Z" fill="#14324B" /><path d="M33.3522 21.0857C33.3522 21.6209 32.9183 22.0548 32.3831 22.0548C31.848 22.0548 31.4141 21.6209 31.4141 21.0857C31.4141 20.5505 31.848 20.1167 32.3831 20.1167C32.9183 20.1167 33.3522 20.5505 33.3522 21.0857Z" fill="#14324B" /><path d="M6.92638 10.447C6.92638 10.9822 6.49252 11.416 5.95733 11.416C5.42214 11.416 4.98828 10.9822 4.98828 10.447C4.98828 9.91181 5.42214 9.47791 5.95733 9.47791C6.49252 9.47791 6.92638 9.91181 6.92638 10.447Z" fill="#14324B" /><path d="M13.5328 10.447C13.5328 10.9822 13.0989 11.416 12.5638 11.416C12.0286 11.416 11.5947 10.9822 11.5947 10.447C11.5947 9.91181 12.0286 9.47791 12.5638 9.47791C13.0989 9.47791 13.5328 9.91181 13.5328 10.447Z" fill="#14324B" /><path d="M20.1393 10.447C20.1393 10.9822 19.7054 11.416 19.1702 11.416C18.6351 11.416 18.2012 10.9822 18.2012 10.447C18.2012 9.91181 18.6351 9.47791 19.1702 9.47791C19.7054 9.47791 20.1393 9.91181 20.1393 10.447Z" fill="#14324B" /><path d="M26.7457 10.447C26.7457 10.9822 26.3118 11.416 25.7767 11.416C25.2414 11.416 24.8076 10.9822 24.8076 10.447C24.8076 9.91181 25.2414 9.47791 25.7767 9.47791C26.3118 9.47791 26.7457 9.91181 26.7457 10.447Z" fill="#14324B" /><path d="M33.3522 10.447C33.3522 10.9822 32.9183 11.416 32.3831 11.416C31.848 11.416 31.4141 10.9822 31.4141 10.447C31.4141 9.91181 31.848 9.47791 32.3831 9.47791C32.9183 9.47791 33.3522 9.91181 33.3522 10.447Z" fill="#14324B" /></g><defs><clipPath id="clip0_398_17576"><rect width="37.9868" height="30.2344" fill="white" /></clipPath></defs></svg><div class="text-content"><h4 class="headboardBased">Headboard</h4><h6 class="desc">FREE 26" Headboard</h6></div></li><li data-val='base-section'><svg xmlns="http://www.w3.org/2000/svg" width="41" height="37" viewBox="0 0 41 37" fill="none"><path d="M22.96 15.3987C22.96 15.9199 22.5069 16.3423 21.9478 16.3423C21.3887 16.3423 20.9355 15.9199 20.9355 15.3987C20.9355 14.8776 21.3887 14.4551 21.9478 14.4551C22.5069 14.4551 22.96 14.8776 22.96 15.3987Z" fill="#14324B" /><path d="M30.2481 15.3987C30.2481 15.9199 29.7949 16.3423 29.2359 16.3423C28.6768 16.3423 28.2236 15.9199 28.2236 15.3987C28.2236 14.8776 28.6768 14.4551 29.2359 14.4551C29.7949 14.4551 30.2481 14.8776 30.2481 15.3987Z" fill="#14324B" /><path d="M15.6719 15.3987C15.6719 15.9199 15.2188 16.3423 14.6597 16.3423C14.1006 16.3423 13.6475 15.9199 13.6475 15.3987C13.6475 14.8776 14.1006 14.4551 14.6597 14.4551C15.2188 14.4551 15.6719 14.8776 15.6719 15.3987Z" fill="#14324B" /><path d="M9.1934 15.3987C9.1934 15.9199 8.74022 16.3423 8.18117 16.3423C7.62213 16.3423 7.16895 15.9199 7.16895 15.3987C7.16895 14.8776 7.62213 14.4551 8.18117 14.4551C8.74022 14.4551 9.1934 14.8776 9.1934 15.3987Z" fill="#14324B" /><path d="M22.96 10.0022C22.96 10.5234 22.5069 10.9458 21.9478 10.9458C21.3887 10.9458 20.9355 10.5234 20.9355 10.0022C20.9355 9.48103 21.3887 9.05859 21.9478 9.05859C22.5069 9.05859 22.96 9.48103 22.96 10.0022Z" fill="#14324B" /><path d="M30.2481 10.0022C30.2481 10.5234 29.7949 10.9458 29.2359 10.9458C28.6768 10.9458 28.2236 10.5234 28.2236 10.0022C28.2236 9.48103 28.6768 9.05859 29.2359 9.05859C29.7949 9.05859 30.2481 9.48103 30.2481 10.0022Z" fill="#14324B" /><path d="M15.6719 10.0022C15.6719 10.5234 15.2188 10.9458 14.6597 10.9458C14.1006 10.9458 13.6475 10.5234 13.6475 10.0022C13.6475 9.48103 14.1006 9.05859 14.6597 9.05859C15.2188 9.05859 15.6719 9.48103 15.6719 10.0022Z" fill="#14324B" /><path d="M9.1934 10.0022C9.1934 10.5234 8.74022 10.9458 8.18117 10.9458C7.62213 10.9458 7.16895 10.5234 7.16895 10.0022C7.16895 9.48103 7.62213 9.05859 8.18117 9.05859C8.74022 9.05859 9.1934 9.48103 9.1934 10.0022Z" fill="#14324B" /><path fill-rule="evenodd" clip-rule="evenodd" d="M17.8344 0.673222C21.4606 1.26723 23.7148 2.13513 25.298 2.75738C26.9383 3.40207 28.1597 4.05432 28.9815 4.5541C29.0097 4.57122 29.0374 4.58815 29.0646 4.60491C29.1942 4.52927 29.3343 4.45326 29.4845 4.3789C30.5509 3.85127 32.1844 3.38905 34.2013 3.78758C36.1803 4.17865 37.2444 5.09678 37.7717 5.93222C38.0261 6.33522 38.1516 6.70938 38.2146 6.98392C38.2463 7.12246 38.2631 7.23945 38.2719 7.32712C38.2764 7.37097 38.2789 7.4079 38.2803 7.43698C38.2806 7.44471 38.2809 7.45191 38.2811 7.45854C38.2813 7.46436 38.2815 7.46975 38.2815 7.47469L38.2816 7.47659L38.2819 7.48996V7.4951L38.282 7.49844L38.2819 30.8378H2.42208C1.46599 30.8378 0.690918 30.2693 0.690918 29.568V1.46939C0.690918 0.812775 1.37885 0.264285 2.2694 0.207932C9.2662 -0.234825 14.2174 0.0806878 17.8344 0.673222ZM36.7411 7.12211C36.6916 6.92382 36.5989 6.6647 36.4251 6.38946C36.0512 5.79707 35.3033 5.13255 33.8153 4.8385C32.3419 4.54737 31.1587 4.86909 30.3412 5.26799L29.0386 6.04641L28.566 5.73039C28.4172 5.63091 28.2402 5.51706 28.0345 5.39196C27.2802 4.93326 26.1405 4.32332 24.5972 3.71673C23.0592 3.11226 20.9434 2.29771 17.511 1.73545C14.0697 1.17171 9.27414 0.857109 2.39694 1.2923C2.27227 1.30019 2.17477 1.3786 2.17477 1.46939V29.568C2.17477 29.6682 2.28549 29.7494 2.42208 29.7494H36.7967L36.7411 7.12211Z" fill="#14324B" /><path d="M0.690918 22.9922C0.690918 21.966 0.690918 21.453 1.12615 21.1342C1.56138 20.8154 2.26187 20.8154 3.66286 20.8154H36.3542C37.7552 20.8154 38.4557 20.8154 38.8909 21.1342C39.3261 21.453 39.3261 21.966 39.3261 22.9922V24.8062C39.3261 25.8323 39.3261 26.3454 38.8909 26.6642C38.4557 26.983 37.7552 26.983 36.3542 26.983H3.66286C2.26187 26.983 1.56138 26.983 1.12615 26.6642C0.690918 26.3454 0.690918 25.8323 0.690918 24.8062V22.9922Z" fill="white" /><path fill-rule="evenodd" clip-rule="evenodd" d="M36.3542 21.9038H3.66286C2.92036 21.9038 2.51296 21.9061 2.23035 21.9339C2.22666 21.9343 2.22305 21.9347 2.21952 21.935C2.21903 21.9376 2.21853 21.9403 2.21804 21.9429C2.18004 22.15 2.17689 22.4483 2.17689 22.9922V24.8062C2.17689 25.35 2.18004 25.6484 2.21804 25.8554C2.21853 25.8581 2.21903 25.8608 2.21952 25.8633C2.22305 25.8637 2.22666 25.8641 2.23035 25.8644C2.51296 25.8922 2.92036 25.8946 3.66286 25.8946H36.3542C37.0967 25.8946 37.5041 25.8922 37.7867 25.8644C37.7903 25.8641 37.794 25.8637 37.7975 25.8633C37.798 25.8608 37.7985 25.8581 37.799 25.8554C37.837 25.6484 37.8401 25.35 37.8401 24.8062V22.9922C37.8401 22.4483 37.837 22.15 37.799 21.9429C37.7985 21.9403 37.798 21.9376 37.7975 21.935C37.794 21.9347 37.7903 21.9343 37.7867 21.9339C37.5041 21.9061 37.0967 21.9038 36.3542 21.9038ZM1.12615 21.1342C0.690918 21.453 0.690918 21.966 0.690918 22.9922V24.8062C0.690918 25.8323 0.690918 26.3454 1.12615 26.6642C1.56138 26.983 2.26187 26.983 3.66286 26.983H36.3542C37.7552 26.983 38.4557 26.983 38.8909 26.6642C39.3261 26.3454 39.3261 25.8323 39.3261 24.8062V22.9922C39.3261 21.966 39.3261 21.453 38.8909 21.1342C38.4557 20.8154 37.7552 20.8154 36.3542 20.8154H3.66286C2.26187 20.8154 1.56138 20.8154 1.12615 21.1342Z" fill="#14324B" /><path d="M0.690918 26.2119H38.8916C39.7082 26.2119 40.3703 26.6927 40.3703 27.2857V35.1604C40.3703 35.7534 39.7082 36.2342 38.8916 36.2342H0.690918V26.2119Z" fill="white" /><path fill-rule="evenodd" clip-rule="evenodd" d="M38.8916 27.2857H2.16966V35.1604H38.8916V27.2857ZM0.690918 26.2119V36.2342H38.8916C39.7082 36.2342 40.3703 35.7534 40.3703 35.1604V27.2857C40.3703 26.6927 39.7082 26.2119 38.8916 26.2119H0.690918Z" fill="#14324B" /></svg><div class="text-content"><h4 class="baseBased">Base Type </h4><h6 class="desc">Standard Base</h6></div></li></ul></div></div></div>`;
        convert.$('.install_ment_para, .dividebuy-softcredit').wrapAll('<div class="dividedby-wraper"></div>');
        convert.$('.dividedby-wraper').insertAfter('.collapse-inner');
        var textUpdate = convert.$('.install_ment_para').html().replaceAll('Or from','From');
        convert.$('.install_ment_para').html(textUpdate);
        convert.$('.InofDiv').insertAfter('.install_ment_para');
        convert.$(tabs).insertBefore('.collapse-inner');
        var checkText = setInterval(function() {
        	var colorText = convert.$('#color-section p.selectedColorDesc').text();
        	var sizeText = convert.$('#size-section p.selectedSizeDesc').text();
        	var storageText = convert.$('#storage-section p.selectedStorageDesc').text();
        	var headText = convert.$('#headboard-section p.selectedHeadboardDesc').text();
        	var baseText = convert.$('#base-section p.selectedBaseDesc').text();
		    if (colorText != '') {
        		convert.$('li[data-val="color-section"] h6.desc').text(colorText);
		    }
		    if (sizeText != '') {
        		convert.$('li[data-val="size-section"] h6.desc').text(sizeText);
		    }
		    if (storageText != '') {
        		convert.$('li[data-val="storage-section"] h6.desc').text(storageText);
		    }
		    if (headText != '') {
        		convert.$('li[data-val="headboard-section"] h6.desc').text(headText);
		    }
		    if (baseText != '') {
        		convert.$('li[data-val="base-section"] h6.desc').text(baseText);
		    }
        },100);
        convert.$('#color-section > div.col-main').click();
        convert.$('#color-section #color, #color-section > div.col-main').addClass('isopen');
        convert.$('#color-section #color').attr('style', 'display: block;');
        convert.$('.custom-tab-wrapper .tab-list li').each(function () {
            convert.$(this).on('click', function () {
                if (convert.$(this).hasClass('active')) return;
                convert.$('.custom-tab-wrapper .tab-list li').removeClass('active');
                convert.$(this).addClass('active');
                let getTarget = convert.$(this).attr('data-val');
                convert.$('#' + getTarget + ' > div.col-main').click();
                /*setTimeout(function() {
	                convert.$('html, body').animate({
	                    scrollTop: convert.$('.price-eligibility-wrap').offset().top
	                }, 300);
            	}, 500);*/
            });
        });
        if (width < 769 && width > 766) {
        	convert.$('.eight.columns.medium-down--one-whole.left-catalog-image.alpha .diven').insertAfter('.collapse-inner');
        	convert.$('.eight.columns.medium-down--one-whole.left-catalog-image.alpha #assembly_selection').insertAfter('.eight.columns.medium-down--one-whole.right-catalog-content-section.omega .diven');
        } else if (width < 767) {
        	convert.$('.dividedby-wraper').insertAfter('#assembly_selection');
        	//convert.$('#shopify-section-warranty-section').prepend('<h2>Why Choose A Sonno Divan Bed?</h2>');
        }
        if (width < 769) {
        	convert.$('#shopify-section-warranty-section').prepend('<h2>Why Choose A Sonno Divan Bed?</h2>');
        }
        convert.$('body').addClass('load');
    }
});