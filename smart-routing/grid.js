(function () {
  const ICON_ELLIPSIS = '<svg viewBox="22 32 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 40C22 38.8929 22.8929 38 24 38C25.1071 38 26 38.8929 26 40C26 41.1071 25.1071 42 24 42C22.8929 42 22 41.1071 22 40ZM28 40C28 38.8929 28.8929 38 30 38C31.1071 38 32 38.8929 32 40C32 41.1071 31.1071 42 30 42C28.8929 42 28 41.1071 28 40ZM36 38C37.1071 38 38 38.8929 38 40C38 41.1071 37.1071 42 36 42C34.8929 42 34 41.1071 34 40C34 38.8929 34.8929 38 36 38Z"/></svg>';
  const ICON_CHEVRON = '<svg class="chevron" viewBox="22 32 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M29.1786 35.75C29.6429 35.3214 30.3571 35.3214 30.8214 35.75L37.6786 42.6071C38.1071 43.0714 38.1071 43.7857 37.6786 44.25C37.2143 44.6786 36.5 44.6786 36.0357 44.25L30 38.1786L23.9643 44.25C23.5 44.6786 22.7857 44.6786 22.3214 44.25C21.8929 43.7857 21.8929 43.0714 22.3214 42.6071L29.1786 35.75Z"/></svg>';
  const ICON_NOTE = '<svg class="note-icon" viewBox="22 32 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 35C22 33.3438 23.3438 32 25 32H35C36.6562 32 38 33.3438 38 35V42C38 43.6562 36.6562 45 35 45H31.25C31.0938 45 30.9375 45.0625 30.8125 45.1562L27.1875 47.8438C27.0625 47.9375 26.9062 48 26.75 48C26.3438 48 26 47.6562 26 47.25V45H25C23.3438 45 22 43.6562 22 42V35ZM30 34.75C29.5938 34.75 29.25 35.0938 29.25 35.5V39C29.25 39.4062 29.5938 39.75 30 39.75C30.4062 39.75 30.75 39.4062 30.75 39V35.5C30.75 35.0938 30.4062 34.75 30 34.75ZM29.1562 41.5C29.1562 41.8125 29.3125 42.0938 29.5625 42.25C29.8438 42.4375 30.1562 42.4375 30.4375 42.25C30.6875 42.0938 30.8438 41.8125 30.8438 41.5C30.8438 41.1875 30.6875 40.9062 30.4375 40.75C30.1562 40.5625 29.8438 40.5625 29.5625 40.75C29.3125 40.9062 29.1562 41.1875 29.1562 41.5Z"/></svg>';
  const ICON_PENCIL = '<svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M1.11773 11.0466C1.27406 10.6098 1.49292 10.1729 1.83683 9.86084L7.49585 4.1815L8.55887 3.12052C9.09038 3.65101 10.1534 4.74319 11.8105 6.36586L12.8735 7.42684L6.15144 14.136C5.80752 14.4792 5.40107 14.7289 4.9321 14.8537L0.930142 15.9771C0.68002 16.0395 0.398632 15.9771 0.211041 15.7586C0.023449 15.5714 -0.0390816 15.2905 0.023449 15.0409L1.11773 11.0466ZM2.86859 10.953C2.74353 11.0778 2.61847 11.2651 2.5872 11.4523L1.83683 14.1672L4.55691 13.4182C4.7445 13.3558 4.9321 13.2622 5.08842 13.1062L2.86859 10.953ZM13.9365 6.36586C13.405 5.86658 12.342 4.7744 10.6849 3.12052L9.62189 2.09075C10.466 1.24821 10.9038 0.78013 11.0288 0.686514C11.4353 0.249642 12.0293 0 12.6234 0C13.2174 0 13.8114 0.249642 14.2179 0.686514L15.3434 1.7787C15.7499 2.21557 16 2.77726 16 3.37016C16 3.99427 15.7499 4.55596 15.3434 4.99283C15.2184 5.08645 14.7494 5.55453 13.9365 6.36586Z"/></svg>';
  const ICON_EXPORT = '<svg viewBox="0 0 12 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 2C0 0.90625 0.90625 0 2 0H6.6875C7.21875 0 7.71875 0.21875 8.09375 0.59375L11.4063 3.90625C11.7813 4.28125 12 4.8125 12 5.34375V14C12 15.0938 11.0938 16 10 16H2C0.90625 16 0 15.0938 0 14V2ZM6.5 1.84375V4.75C6.5 5.15625 6.84375 5.5 7.25 5.5H10.1875L6.5 1.84375ZM5.46875 13.7813C5.75 14.0625 6.25 14.0625 6.53125 13.7813L8.53125 11.7813C8.8125 11.5 8.8125 11 8.53125 10.7188C8.25 10.4375 7.75 10.4375 7.46875 10.7188L6.75 11.4375V8.75C6.75 8.34375 6.40625 8 6 8C5.59375 8 5.25 8.34375 5.25 8.75V11.4375L4.53125 10.7188C4.25 10.4375 3.75 10.4375 3.46875 10.7188C3.1875 11.0313 3.1875 11.5 3.46875 11.7813L5.46875 13.7813Z"/></svg>';
  const ICON_COLUMNS = '<svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11.4286 1.71429V14.2857H13.7143C14.0357 14.2857 14.2857 14.0357 14.2857 13.7143V2.28571C14.2857 1.96429 14.0357 1.71429 13.7143 1.71429H11.4286ZM9.71429 1.71429H6.28571V14.2857H9.71429V1.71429ZM4.57143 14.2857V1.71429H2.28571C1.96429 1.71429 1.71429 1.96429 1.71429 2.28571V13.7143C1.71429 14.0357 1.96429 14.2857 2.28571 14.2857H4.57143ZM0 2.28571C0 1.03571 1.03571 0 2.28571 0H13.7143C14.9643 0 16 1.03571 16 2.28571V13.7143C16 14.9643 14.9643 16 13.7143 16H2.28571C1.03571 16 0 14.9643 0 13.7143V2.28571Z"/></svg>';
  const ICON_SETTINGS = '<svg viewBox="0 0 15 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.69176 0.764706C5.77999 0.323529 6.16235 0 6.60352 0H8.36823C8.80941 0 9.22117 0.323529 9.30941 0.764706L9.72117 2.82353C10.1329 3 10.5153 3.20588 10.8682 3.47059L12.8682 2.82353C13.3094 2.67647 13.7506 2.85294 13.9859 3.23529L14.8682 4.76471C15.0741 5.14706 15.0153 5.64706 14.6623 5.94118L13.1035 7.32353C13.1329 7.55882 13.1329 7.76471 13.1329 8C13.1329 8.23529 13.1329 8.44118 13.1035 8.67647L14.6623 10.0588C15.0153 10.3529 15.0741 10.8529 14.8682 11.2353L13.9859 12.7647C13.7506 13.1471 13.3094 13.3235 12.8682 13.1765L10.8682 12.5294C10.5153 12.7941 10.1329 13.0294 9.72117 13.2059L9.30941 15.2647C9.22117 15.6765 8.83882 16 8.36823 16H6.63294C6.16235 16 5.77999 15.6765 5.69176 15.2647L5.27999 13.2059C4.86823 13.0294 4.48588 12.7941 4.13294 12.5294L2.13294 13.1765C1.69176 13.3235 1.22117 13.1471 1.01529 12.7647L0.132936 11.2353C-0.102358 10.8529 -0.0141228 10.3529 0.309407 10.0588L1.89764 8.67647C1.86823 8.44118 1.83882 8.23529 1.83882 8C1.83882 7.76471 1.86823 7.55882 1.89764 7.32353L0.309407 5.94118C-0.0141228 5.64706 -0.102358 5.14706 0.132936 4.76471L1.01529 3.23529C1.22117 2.85294 1.69176 2.67647 2.13294 2.82353L4.10352 3.47059C4.45647 3.20588 4.86823 3 5.27999 2.79412L5.69176 0.764706ZM7.48588 10.3529C8.77999 10.3529 9.83882 9.29412 9.83882 8C9.83882 6.70588 8.77999 5.64706 7.48588 5.64706C6.19176 5.64706 5.13294 6.70588 5.13294 8C5.13294 9.29412 6.19176 10.3529 7.48588 10.3529Z"/></svg>';
  const ICON_CHECK = '<svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.28 3.03L5.53 12.78a.75.75 0 0 1-1.06 0L.72 9.03a.75.75 0 1 1 1.06-1.06l3.22 3.22L14.22 1.97a.75.75 0 1 1 1.06 1.06Z"/></svg>';
  const ICON_FILTER = '<svg viewBox="0 0 16 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M1.01116 0H14.9888C15.3944 0 15.7688 0.249772 15.9248 0.62443C16.0809 0.999089 15.9872 1.43619 15.7064 1.71718L9.99681 7.3995V12.9882C9.99681 13.394 9.74721 13.7687 9.37281 13.9248C8.99841 14.0809 8.5928 13.9872 8.2808 13.7062L6.28399 11.7081C6.09679 11.5207 6.00319 11.271 6.00319 10.99V7.3995L0.293552 1.71718C0.0127506 1.43619 -0.08085 0.999089 0.0751509 0.62443C0.231152 0.249772 0.605554 0 1.01116 0Z"/></svg>';
  const ICON_HISTORY = '<svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.24242 1.93939C6.09091 1.93939 4.21212 3.12121 3.21212 4.84848H4.36364C4.90909 4.84848 5.33333 5.27273 5.33333 5.81818C5.33333 6.36364 4.90909 6.78788 4.36364 6.78788H0.969697C0.424242 6.78788 0 6.36364 0 5.81818V2.42424C0 1.87879 0.424242 1.45455 0.969697 1.45455C1.51515 1.45455 1.93939 1.87879 1.93939 2.42424V3.24242C3.36364 1.27273 5.63636 0 8.24242 0C12.5152 0 16 3.48485 16 7.75758C16 12.0303 12.5152 15.5152 8.24242 15.5152C5.60606 15.5152 3.27273 14.2121 1.87879 12.1818C1.57576 11.7576 1.66667 11.1515 2.12121 10.8485C2.54545 10.5455 3.15152 10.6364 3.45455 11.0909C4.51515 12.6061 6.27273 13.5758 8.24242 13.5758C11.4545 13.5758 14.0606 10.9697 14.0606 7.75758C14.0606 4.54545 11.4545 1.93939 8.24242 1.93939ZM8.9697 4.60606V7.45455L10.9394 9.42424C11.2121 9.69697 11.2121 10.1818 10.9394 10.4545C10.6667 10.7273 10.1818 10.7273 9.90909 10.4545L7.72727 8.27273C7.60606 8.15152 7.51515 7.93939 7.51515 7.75758V4.60606C7.51515 4.21212 7.84848 3.87879 8.24242 3.87879C8.63636 3.87879 8.9697 4.21212 8.9697 4.60606Z"/></svg>';
  const ICON_SEARCH = '<svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13 6.5C13 7.9375 12.5312 9.25 11.75 10.3438L15.7188 14.2812C16.0938 14.6875 16.0938 15.3125 15.7188 15.7188C15.3125 16.0938 14.6875 16.0938 14.2812 15.7188L10.3438 11.75C9.25 12.5312 7.9375 13 6.5 13C2.90625 13 0 10.0938 0 6.5C0 2.90625 2.90625 0 6.5 0C10.0938 0 13 2.90625 13 6.5ZM6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11Z"/></svg>';
  const ICON_CHECKBOX_OFF = '<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4323 1.56771H1.56771V12.4323H12.4323V1.56771ZM12.4323 0C13.3073 0 14 0.692708 14 1.56771V12.4323C14 13.3073 13.3073 14 12.4323 14H1.56771C0.692708 14 0 13.3073 0 12.4323V1.56771C0 0.692708 0.692708 0 1.56771 0H12.4323Z" fill="#A8A29E"/></svg>';
  const ICON_CHECKBOX_ON = '<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4323 0C13.3073 0 14 0.692708 14 1.56771V12.4323C14 13.3073 13.3073 14 12.4323 14H1.56771C0.692708 14 0 13.3073 0 12.4323V1.56771C0 0.692708 0.692708 0 1.56771 0H12.4323ZM5.97917 10.3542L11.8854 4.44792C12.2135 4.11979 12.2135 3.64583 11.8854 3.35417C11.5938 3.02604 11.0833 3.02604 10.7917 3.35417L5.43229 8.67708L3.20833 6.45312C2.91667 6.16146 2.40625 6.16146 2.11458 6.45312C1.78646 6.74479 1.78646 7.25521 2.11458 7.54688L4.88542 10.3542C5.21354 10.6458 5.6875 10.6458 5.97917 10.3542Z" fill="#3399D1"/></svg>';
  const ICON_CHECKBOX_INDETERMINATE = '<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="14" height="14" rx="1.56771" fill="#3399D1"/><rect x="3.20833" y="6.29167" width="7.58333" height="1.41667" rx="0.708333" fill="white"/></svg>';
  const ICON_CHIP_REMOVE = '<svg viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 14C3.14453 14 0 10.8555 0 7C0 3.14453 3.14453 0 7 0C10.8555 0 14 3.14453 14 7C14 10.8555 10.8555 14 7 14ZM4.56641 4.56641C4.32031 4.8125 4.32031 5.25 4.56641 5.49609L6.07031 7L4.56641 8.50391C4.32031 8.75 4.32031 9.16016 4.56641 9.43359C4.8125 9.67969 5.25 9.67969 5.49609 9.43359L7 7.92969L8.50391 9.43359C8.75 9.67969 9.16016 9.67969 9.43359 9.43359C9.67969 9.1875 9.67969 8.75 9.43359 8.50391L7.92969 7L9.43359 5.49609C9.67969 5.25 9.67969 4.8125 9.43359 4.56641C9.1875 4.32031 8.75 4.32031 8.50391 4.56641L7 6.07031L5.49609 4.56641C5.25 4.32031 4.8125 4.32031 4.56641 4.56641Z"/></svg>';
  const ICON_MAP_PIN = '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8169 0.7361V3.95926C10.3944 3.75352 9.9507 3.66209 9.46479 3.66209C8.38732 3.66209 7.41549 4.18785 6.76056 4.98792V2.72486L4.05634 1.74191V8.2568L6.19014 9.03401C6.35915 9.53691 6.59155 10.017 6.82394 10.4284C6.9084 10.5884 6.99296 10.7485 7.09859 10.8856L3.42254 9.58263L0.971831 10.9085C0.760563 11.0228 0.528169 10.9999 0.316901 10.8628C0.126761 10.7256 0 10.497 0 10.2456V2.19909C0 1.92478 0.147887 1.67333 0.380282 1.53617L3.08451 0.0731814C3.23239 0.00460364 3.42254 -0.0182556 3.59155 0.0503222L7.39437 1.42188L9.84507 0.0731814C10.0563 -0.0411149 10.2887 -0.0182556 10.5 0.1189C10.6901 0.256056 10.8169 0.484648 10.8169 0.7361ZM9.46479 4.75933C10.8592 4.75933 12 5.97087 12 7.45672C12 9.03401 10.6479 10.8856 9.92958 11.7771C9.67606 12.0743 9.25352 12.0743 9.02113 11.7771C8.28169 10.8856 6.92958 9.03401 6.92958 7.45672C6.92958 5.97087 8.07042 4.75933 9.46479 4.75933ZM8.61972 7.50244C8.61972 8.00534 9 8.41681 9.46479 8.41681C9.92958 8.41681 10.3099 8.00534 10.3099 7.50244C10.3099 6.99954 9.92958 6.58807 9.46479 6.58807C9 6.58807 8.61972 6.99954 8.61972 7.50244Z" fill="currentColor"/></svg>';
  const ICON_PHONE_LANDLINE = '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.74471 0.592393L4.7055 2.86548C4.86954 3.26386 4.75237 3.70911 4.42429 3.96688L3.3932 4.8105C4.14309 6.49775 5.47882 7.85691 7.1192 8.6771L8.03312 7.57571C8.29089 7.24763 8.73614 7.13046 9.13451 7.2945L11.4076 8.25529C11.8529 8.44276 12.0872 8.91144 11.97 9.38012L11.9232 9.49729C11.5248 11.0205 10.0484 12.3094 8.26746 11.9344C4.16652 11.0674 0.932636 7.83348 0.0655802 3.73254C-0.309363 1.95156 0.979504 0.498657 2.50271 0.0768461L2.61988 0.0299783C3.0885 -0.0871914 3.55724 0.147148 3.74471 0.592393Z" fill="currentColor"/></svg>';
  const ICON_PHONE_MOBILE = '<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5C0 0.679688 0.659091 0 1.45455 0H6.54545C7.34091 0 8 0.679688 8 1.5V10.5C8 11.3203 7.34091 12 6.54545 12H1.45455C0.659091 12 0 11.3203 0 10.5V1.5ZM1.45455 1.5V8.625H6.54545V1.5H1.45455ZM4 11.0625C4.40909 11.0625 4.72727 10.7344 4.72727 10.3125C4.72727 9.89062 4.40909 9.5625 4 9.5625C3.59091 9.5625 3.27273 9.89062 3.27273 10.3125C3.27273 10.7344 3.59091 11.0625 4 11.0625Z" fill="currentColor"/></svg>';
  const ICON_CHEVRON_DOWN = '<svg viewBox="0 0 16 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.17857 8.82143L0.321429 1.96429C-0.107143 1.5 -0.107143 0.785714 0.321429 0.321429C0.785714 -0.107143 1.5 -0.107143 1.96429 0.321429L8 6.39286L14.0357 0.321429C14.5 -0.107143 15.2143 -0.107143 15.6786 0.321429C16.1071 0.785714 16.1071 1.5 15.6786 1.96429L8.82143 8.82143C8.35714 9.25 7.64286 9.25 7.17857 8.82143Z"/></svg>';
  const ICON_CLOSE = '<svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.27828 2.375L10.0208 8.125L15.7217 2.375C16.2211 1.875 17.0949 1.875 17.5943 2.375C18.1352 2.91667 18.1352 3.75 17.5943 4.29167L11.8934 10L17.5943 15.7083C18.1352 16.25 18.1352 17.0833 17.5943 17.625C17.0949 18.125 16.2211 18.125 15.7217 17.625L10.0208 11.875L4.27828 17.625C3.77893 18.125 2.90507 18.125 2.40572 17.625C1.86476 17.0833 1.86476 16.25 2.40572 15.7083L8.10663 10L2.40572 4.29167C1.86476 3.75 1.86476 2.91667 2.40572 2.375C2.90507 1.875 3.77893 1.875 4.27828 2.375Z"/></svg>';
  const ICON_EXTERNAL = '<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>';
  const ICON_COLLAPSE = '<svg viewBox="0 0 16 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.17857 0.321429C7.64286 -0.107143 8.35714 -0.107143 8.82143 0.321429L15.6786 7.17857C16.1071 7.64286 16.1071 8.35714 15.6786 8.82143C15.2143 9.25 14.5 9.25 14.0357 8.82143L8 2.75L1.96429 8.82143C1.5 9.25 0.785714 9.25 0.321429 8.82143C-0.107143 8.35714 -0.107143 7.64286 0.321429 7.17857L7.17857 0.321429Z"/></svg>';

  const DEFAULT_ROWS = window.SMART_ROUTING_DEFAULT_ROWS || [];
  const TAG_SORT_ORDER = ['Time-Sensitive', 'Facility', 'Service', 'Liquid O2'];
  const ALL_TAGS = [
    { t: 'Back order', v: 'neutral' },
    { t: 'Disaster prep', v: 'neutral' },
    { t: 'Facility', v: 'neutral' },
    { t: 'Liquid O2', v: 'neutral' },
    { t: 'Live Discharge Confirmed', v: 'neutral' },
    { t: 'Specialty', v: 'neutral' },
    { t: 'Service', v: 'neutral' },
    { t: 'Spanish', v: 'neutral' },
    { t: 'Time-Sensitive', v: 'error' }
  ];

  const DRIVER_SECTIONS = [
    { heading: 'Birmingham, AL', options: ['Eric E.', 'Hannah S.'] },
    { heading: 'Gadsden, AL', options: ['Eric E.', 'Martin L.'] }
  ];

  const RECENT_ORDERS = [
    { type: 'Delivery', id: '#123455789', patient: 'John Smith', client: 'HarborLight Hospice Care - HarborLight Hospice Care - Birmingham' },
    { type: 'Pickup', id: '#123455123', patient: 'Emily Johnson', client: 'Big Heart Hospice & Home Care - Big Heart Birmingham' },
    { type: 'Pickup', id: '#123455456', patient: 'Michael Brown', client: 'Big Heart Hospice & Home Care - Big Heart Gadsden' },
    { type: 'Delivery', id: '#123455234', patient: 'Sarah Davis', client: 'Big Heart Hospice & Home Care - Big Heart Gadsden' },
    { type: 'Delivery', id: '#123455678', patient: 'David Wilson', client: 'Comfort Home Health - Trussville, AL' }
  ];

  const SIDE_SHEET_BODY = '<div class="equipment-group"><div class="equipment-group-heading">Delivery (3)</div><div class="equipment-table equipment-table--two-col"><div class="equipment-table-head"><div class="equipment-head-cell equipment-col-item">Item</div><div class="equipment-head-cell equipment-col-qty">Qty</div></div><div class="equipment-table-body"><div class="equipment-row"><div class="equipment-cell equipment-col-item"><span class="equipment-cell-text">Over bed table</span></div><div class="equipment-cell equipment-col-qty"><span class="equipment-cell-text">1</span></div></div><div class="equipment-row"><div class="equipment-cell equipment-col-item"><span class="equipment-cell-text">Bed full-electric</span></div><div class="equipment-cell equipment-col-qty"><span class="equipment-cell-text">1</span></div></div><div class="equipment-row"><div class="equipment-cell equipment-col-item"><span class="equipment-cell-text">O2 Cylinder</span></div><div class="equipment-cell equipment-col-qty"><span class="equipment-cell-text">12</span></div></div></div></div></div><div class="equipment-group"><div class="equipment-group-heading">Pick up (1)</div><div class="equipment-table equipment-table--two-col"><div class="equipment-table-head"><div class="equipment-head-cell equipment-col-item">Item</div><div class="equipment-head-cell equipment-col-qty">Qty</div></div><div class="equipment-table-body"><div class="equipment-row"><div class="equipment-cell equipment-col-item"><span class="equipment-cell-text">Bed full-electric</span></div><div class="equipment-cell equipment-col-qty"><span class="equipment-cell-text">1</span></div></div></div></div></div><div class="equipment-group"><div class="equipment-group-heading">Service (1)</div><div class="equipment-table equipment-table--service"><div class="equipment-table-head"><div class="equipment-head-cell equipment-col-item">Item</div><div class="equipment-head-cell equipment-col-details">Service Details</div><div class="equipment-head-cell equipment-col-qty">Qty</div></div><div class="equipment-table-body"><div class="equipment-row"><div class="equipment-cell equipment-col-item"><span class="equipment-cell-text">Hoyer lift</span></div><div class="equipment-cell equipment-col-details"><div class="equipment-cell-stack"><span class="equipment-cell-text">Equipment does not power on</span><span class="equipment-cell-subtext">light blinks once then goes out</span></div></div><div class="equipment-cell equipment-col-qty"><span class="equipment-cell-text">1</span></div></div></div></div></div><div class="side-sheet-actions"><button class="btn-secondary" type="button">View order<span class="btn-icon-end">' + ICON_EXTERNAL + '</span></button></div>';

  function dateCell(date, time) {
    if (!date) return '<span class="cell-main">-</span>';
    return '<div class="cell-stack"><span class="cell-main">' + date + '</span>' + (time ? '<span class="cell-caption">' + time + '</span>' : '') + '</div>';
  }

  function badge(b) {
    return '<span class="badge ' + b.v + '">' + b.t + '</span>';
  }

  function sortTags(tags) {
    return tags.slice().sort(function (a, b) {
      const ai = TAG_SORT_ORDER.indexOf(a.t);
      const bi = TAG_SORT_ORDER.indexOf(b.t);
      if (ai !== -1 && bi !== -1) return ai - bi;
      if (ai !== -1) return -1;
      if (bi !== -1) return 1;
      return a.t.localeCompare(b.t);
    });
  }

  function phoneTypeMarkup(phoneType) {
    var type = (phoneType || '').trim() || 'Landline';
    var icon = type === 'Mobile' ? ICON_PHONE_MOBILE : ICON_PHONE_LANDLINE;
    return '<span class="phone-type"><span class="phone-icon-frame">' + icon + '</span>' + type + '</span>';
  }

  function tagBadgesHtml(tags) {
    const sorted = sortTags(tags);
    const visible = sorted.slice(0, 4);
    const overflow = sorted.length - 4;
    if (overflow <= 0) return visible.map(badge).join('');
    const overflowTags = sorted.slice(4);
    const encoded = encodeURIComponent(JSON.stringify(overflowTags));
    return visible.map(badge).join('') + '<span class="tags-overflow" data-overflow="' + encoded + '">+' + overflow + ' more</span>';
  }

  function normalizeOption(option) {
    if (typeof option === 'string') return { label: option, disabled: false };
    return { label: option.label, disabled: !!option.disabled };
  }

  function normalizeSearchEntry(option) {
    if (typeof option === 'string') return { type: 'option', label: option, disabled: false };
    if (option && option.type === 'heading') return { type: 'heading', label: option.label };
    if (option && option.heading) return { type: 'heading', label: option.heading };
    return { type: 'option', label: option.label, disabled: !!option.disabled };
  }

  function clampPopoverLeft(left, popWidth) {
    if (left + popWidth > window.innerWidth) left = window.innerWidth - popWidth;
    if (left < 0) left = 0;
    return left;
  }

  function buildAssigneeOptions(mode, dispatchEnabled) {
    const dispatchOption = { label: 'Dispatch', disabled: !dispatchEnabled };
    if (mode === 'search') {
      return ['Me', 'Carmen M.', 'Cece L.', 'Hannah S.', dispatchOption, 'Purchasing', 'Respiratory Therapy'];
    }
    return ['Me', dispatchOption, 'Purchasing', 'Respiratory Therapy'];
  }

  function extractZip(r) {
    const source = Array.isArray(r.addr) ? r.addr.join(' ') : '';
    const match = source.match(/\b\d{5}\b/);
    return match ? match[0] : '';
  }

  function getOrderStatusBadgeText(r) {
    if (r.dispatchBadgeText) return r.dispatchBadgeText;
    if (!r.status || !r.status.t) return r.orderType;
    return r.orderType + ' ' + r.status.t;
  }

  function getOrderStatusBadgeVariant(r) {
    if (r.dispatchBadgeVariant) return r.dispatchBadgeVariant;
    if (!r.status || !r.status.v) return 'neutral';
    if (r.status.v === 'warning') return 'warning';
    if (r.status.v === 'error') return 'error';
    if (r.status.v === 'info') return 'info';
    if (r.status.v === 'caution') return 'caution';
    if (r.status.v === 'success') return 'success';
    return 'neutral';
  }

  function etaCell(r) {
    if (r.etaDate) return dateCell(r.etaDate, r.etaTime);
    if (!r.etaTime && !r.etaCaption) return '<span class="cell-main">–</span>';
    var main = r.etaTime || '–';
    var captionClass = 'cell-caption' + (r.etaCaptionColor === 'success' ? ' eta-caption--success' : ' eta-caption');
    var captionHtml = r.etaCaption ? '<span class="' + captionClass + '">' + r.etaCaption + '</span>' : '';
    return '<div class="cell-stack"><span class="cell-main">' + main + '</span>' + captionHtml + '</div>';
  }

  function completedCell(r) {
    if (r.completedDate || r.completedTime) {
      return dateCell(r.completedDate, r.completedTime);
    }
    return '<span class="cell-main">–</span>';
  }

  function linkValueOrDash(value) {
    var text = String(value || '').trim();
    if (!text) return '<span class="cell-main">–</span>';
    return '<span class="cell-main">' + text + '</span>';
  }

  function buildRowHtml(r, i, variant) {
    const managerLike = variant === 'manager' || variant === 'dispatch';
    const dispatch = variant === 'dispatch';
    const selectCell = managerLike
      ? '<div class="row-cell col-select"><span class="checkbox row-checkbox" role="checkbox" aria-checked="false" aria-label="Select row" tabindex="0">' + ICON_CHECKBOX_OFF + '</span></div>'
      : '';

    const priorityClass = ['STAT', 'Urgent'].includes(r.priority) ? 'stat' : '';

    if (dispatch) {
      const zip = extractZip(r);
      const orderBadgeText = getOrderStatusBadgeText(r);
      const orderBadgeVariant = getOrderStatusBadgeVariant(r);

      return '<div class="row-main" data-index="' + i + '">' +
        selectCell +
        '<div class="row-cell col-zip"><span class="cell-main">' + (zip || '-') + '</span></div>' +
        '<div class="row-cell col-order"><div class="cell-stack"><div class="order-main"><span class="cell-main link" tabindex="0">' + r.order + '</span>' + (r.note ? ICON_NOTE : '') + '</div><div class="badges"><span class="badge order-status-badge ' + orderBadgeVariant + '">' + orderBadgeText + '</span></div></div></div>' +
        '<div class="row-cell col-priority"><div class="cell-stack"><span class="cell-main ' + priorityClass + '">' + r.priority + '</span><span class="cell-caption">' + r.reason + '</span></div></div>' +
        '<div class="row-cell col-patient"><span class="cell-main link" tabindex="0">' + r.patient + '</span></div>' +
        '<div class="row-cell col-scheduled">' + dateCell(r.schedDate || r.reqDate, r.schedTime || r.reqTime) + '</div>' +
        '<div class="row-cell col-eta">' + etaCell(r) + '</div>' +
        '<div class="row-cell col-completed">' + completedCell(r) + '</div>' +
        '<div class="row-cell col-driver editable-cell"></div>' +
        '<div class="row-cell col-route editable-cell"><div class="cell-display">' + linkValueOrDash(r.route) + '<button class="icon-btn icon-btn--reveal edit-btn" aria-label="Edit route">' + ICON_PENCIL + '</button></div></div>' +
        '<div class="row-cell col-tags tags-cell editable-cell"><div class="badges">' + tagBadgesHtml(r.tags) + '</div><button class="icon-btn icon-btn--reveal edit-btn tags-edit-btn" aria-label="Edit tags">' + ICON_PENCIL + '</button></div>' +
        '<div class="row-cell col-actions"><div class="actions"><button class="icon-btn more-btn" aria-label="More actions">' + ICON_ELLIPSIS + '</button><button class="icon-btn toggle-btn" aria-label="Toggle details">' + ICON_CHEVRON + '</button></div></div>' +
        '</div>' +
        '<div class="expand-wrap"><div class="expand-inner"><div class="detail"><div class="detail-section"><div class="detail-heading">Client</div><div class="lv"><span class="label">Client:</span><span class="value">' + r.client + '</span></div><div class="lv"><span class="label">Branch:</span><span class="value">' + r.branch + '</span></div></div><div class="detail-section"><div class="detail-heading">Provider</div><div class="lv"><span class="label">Warehouse:</span><span class="value">' + r.warehouse + '</span></div></div><div class="detail-section"><div class="detail-heading">Address</div><div class="lv"><span class="label">Address type:</span><span class="value">' + r.addrType + '</span></div><div class="lv-stacked"><span class="label">Address:</span><span class="value">' + r.addr.join('<br>') + '</span></div><button class="view-map-btn" type="button"><span class="view-map-icon">' + ICON_MAP_PIN + '</span>View on map</button></div><div class="detail-section"><div class="detail-heading">Primary Contact</div><div class="lv"><span class="label">Name:</span><span class="value">' + r.contact + '</span></div><div class="lv"><span class="label">Relationship:</span><span class="value">' + r.rel + '</span></div><div class="phone-line"><div class="lv"><span class="label">Phone:</span><span class="value">' + r.phone + '</span></div>' + phoneTypeMarkup(r.phoneType) + '</div></div></div></div></div><div class="row-divider" aria-hidden="true"></div>';
    }

    return '<div class="row-main" data-index="' + i + '">' +
      selectCell +
      '<div class="row-cell col-assignee editable-cell"></div>' +
      '<div class="row-cell col-order"><div class="cell-stack"><div class="order-main"><span class="cell-main link" tabindex="0">' + r.order + '</span>' + (r.note ? ICON_NOTE : '') + '</div><span class="cell-caption">' + r.orderType + '</span></div></div>' +
      '<div class="row-cell col-priority"><div class="cell-stack"><span class="cell-main ' + priorityClass + '">' + r.priority + '</span><span class="cell-caption">' + r.reason + '</span></div></div>' +
      '<div class="row-cell col-patient"><span class="cell-main link" tabindex="0">' + r.patient + '</span></div>' +
      '<div class="row-cell col-ordered">' + dateCell(r.orderedDate, r.orderedTime) + '</div>' +
      '<div class="row-cell col-requested">' + dateCell(r.reqDate, r.reqTime) + '</div>' +
      '<div class="row-cell col-scheduled">' + dateCell(r.schedDate, r.schedTime) + '</div>' +
      '<div class="row-cell col-status status-cell"><div class="badges">' + badge(r.status) + '</div></div>' +
      '<div class="row-cell col-tags tags-cell editable-cell"><div class="badges">' + tagBadgesHtml(r.tags) + '</div><button class="icon-btn icon-btn--reveal edit-btn tags-edit-btn" aria-label="Edit tags">' + ICON_PENCIL + '</button></div>' +
      '<div class="row-cell col-actions"><div class="actions"><button class="icon-btn more-btn" aria-label="More actions">' + ICON_ELLIPSIS + '</button><button class="icon-btn toggle-btn" aria-label="Toggle details">' + ICON_CHEVRON + '</button></div></div>' +
        '</div>' +
        '<div class="expand-wrap"><div class="expand-inner"><div class="detail"><div class="detail-section"><div class="detail-heading">Client</div><div class="lv"><span class="label">Client:</span><span class="value">' + r.client + '</span></div><div class="lv"><span class="label">Branch:</span><span class="value">' + r.branch + '</span></div></div><div class="detail-section"><div class="detail-heading">Provider</div><div class="lv"><span class="label">Warehouse:</span><span class="value">' + r.warehouse + '</span></div></div></div></div></div><div class="row-divider" aria-hidden="true"></div>';
  }

  function buildSideSheetHtml(orderId) {
    return '<div class="side-sheet-header"><div class="side-sheet-title">Order #' + orderId + '</div><button class="icon-btn side-sheet-close" aria-label="Close">' + ICON_CLOSE + '</button></div><div class="side-sheet-body">' + SIDE_SHEET_BODY + '</div>';
  }

  function buildHistoryPopoverHtml() {
    return '<div class="history-heading">My Recent Orders</div><div class="history-list">' + RECENT_ORDERS.map(function (o) {
      return '<div class="history-order"><div class="history-order-line"><span class="history-order-type">' + o.type + '</span><span class="link history-order-id" tabindex="0">' + o.id + '</span></div><span class="link" tabindex="0">' + o.patient + '</span><span class="history-client">' + o.client + '</span></div>';
    }).join('') + '</div>';
  }

  function buildEditDriverRouteModalHtml(row) {
    var orderId = row && row.order ? String(row.order) : '';
    var driver = row && row.driver ? String(row.driver) : '';
    var route = row && row.route ? String(row.route) : '';
    var chips = ((row && row.tags) || []).map(function (tag) {
      var text = tag && tag.t ? String(tag.t).replace(/-/g, ' ') : '';
      if (!text) return '';
      return '<span class="edit-driver-route-chip"><span class="edit-driver-route-chip-text">' + text + '</span></span>';
    }).join('');

    return '<div class="edit-driver-route-modal" role="dialog" aria-modal="true" aria-label="Edit driver / route">' +
      '<div class="edit-driver-route-modal-header">' +
      '<h2 class="edit-driver-route-modal-title">Order #' + orderId + '</h2>' +
      '<button class="icon-btn edit-driver-route-close" type="button" aria-label="Close">' + ICON_CLOSE + '</button>' +
      '</div>' +
      '<div class="edit-driver-route-modal-body">' +
      '<div class="edit-driver-route-grid">' +
      '<div class="edit-driver-route-field">' +
      '<span class="edit-driver-route-label">Driver</span>' +
      '<div class="edit-driver-route-input">' +
      '<span class="edit-driver-route-input-icon">' + ICON_SEARCH + '</span>' +
      '<span class="edit-driver-route-input-value">' + (driver || '') + '</span>' +
      '<span class="edit-driver-route-input-chevron">' + ICON_CHEVRON_DOWN + '</span>' +
      '</div>' +
      '</div>' +
      '<div class="edit-driver-route-field">' +
      '<span class="edit-driver-route-label">Route</span>' +
      '<div class="edit-driver-route-input">' +
      '<span class="edit-driver-route-input-value">' + (route || '') + '</span>' +
      '<span class="edit-driver-route-input-chevron">' + ICON_CHEVRON_DOWN + '</span>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="edit-driver-route-field">' +
      '<span class="edit-driver-route-label">Tags</span>' +
      '<div class="edit-driver-route-input edit-driver-route-input-tags">' +
      '<span class="edit-driver-route-input-icon">' + ICON_SEARCH + '</span>' +
      '<span class="edit-driver-route-chip-list">' + chips + '</span>' +
      '<span class="edit-driver-route-input-chevron">' + ICON_CHEVRON_DOWN + '</span>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="edit-driver-route-modal-footer">' +
      '<button class="edit-driver-route-btn edit-driver-route-btn-cancel" type="button">Cancel</button>' +
      '<button class="edit-driver-route-btn edit-driver-route-btn-save" type="button">Save</button>' +
      '</div>' +
      '</div>';
  }

  function setupMenuPopover(trigger, config, state) {
    if (!trigger) return;
    const selectable = Object.prototype.hasOwnProperty.call(config, 'selected');
    let menuEl = null;
    let selected = config.selected || null;

    function positionMenu() {
      if (!menuEl) return;
      const r = trigger.getBoundingClientRect();
      menuEl.style.top = r.bottom + 4 + 'px';
      if (config.align === 'right') {
        menuEl.style.left = r.right - menuEl.offsetWidth + 'px';
      } else {
        menuEl.style.left = r.left + 'px';
      }
    }

    function open() {
      if (menuEl) return;
      state.openMenuPopovers.forEach(function (closeOther) { closeOther(); });
      menuEl = document.createElement('div');
      menuEl.className = 'cell-menu menu-popover';
      menuEl.innerHTML = (config.heading ? '<div class="menu-heading">' + config.heading + '</div>' : '') +
        config.options.map(function (opt) {
          var label = (typeof opt === 'object') ? opt.label : opt;
          var disabled = (typeof opt === 'object') && opt.disabled;
          return '<div class="menu-option' + (selectable && opt === selected ? ' selected' : '') + (disabled ? ' disabled' : '') + '" tabindex="' + (disabled ? '-1' : '0') + '" data-value="' + label + '" ' + (disabled ? 'aria-disabled="true"' : '') + '>' + label + '</div>';
        }).join('');
      document.body.appendChild(menuEl);
      trigger.classList.add('active');
      state.openMenuPopovers.add(close);
      positionMenu();
      window.addEventListener('scroll', positionMenu, true);
      window.addEventListener('resize', positionMenu);
      menuEl.querySelectorAll('.menu-option').forEach(function (o) {
        o.addEventListener('click', function (e) {
          e.stopPropagation();
          if (o.classList.contains('disabled')) return;
          const value = o.dataset.value;
          if (selectable) selected = value;
          if (config.onSelect) config.onSelect(value);
          close();
        });
      });
    }

    function close() {
      if (menuEl) {
        menuEl.remove();
        menuEl = null;
      }
      state.openMenuPopovers.delete(close);
      window.removeEventListener('scroll', positionMenu, true);
      window.removeEventListener('resize', positionMenu);
      trigger.classList.remove('active');
    }

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      menuEl ? close() : open();
    });
    document.addEventListener('click', function (e) {
      if (menuEl && !menuEl.contains(e.target) && e.target !== trigger) close();
    });
  }

  function setupEditableCellSearch(cell, config, state) {
    let selected = config.value || null;
    let working = null;
    let popEl = null;

    const api = { exitEdit: function () { if (popEl) close(); } };
    state.editableCells.add(api);

    function renderDisplay() {
      var displayHtml = config.renderDisplay ? config.renderDisplay(selected) : '<span class="cell-display-text">' + (selected || '') + '</span>';
      cell.innerHTML = '<div class="cell-display">' + displayHtml + '<button class="icon-btn icon-btn--reveal edit-btn" aria-label="' + (config.ariaLabel || 'Edit') + '">' + ICON_PENCIL + '</button></div>';
      cell.querySelector('.edit-btn').addEventListener('click', function (e) {
        e.stopPropagation();
        popEl ? close() : open();
      });
    }

    function position() {
      if (!popEl) return;
      const r = cell.getBoundingClientRect();
      popEl.style.top = r.bottom + 4 + 'px';
      const left = clampPopoverLeft(r.left, popEl.offsetWidth);
      popEl.style.left = left + 'px';
    }

    function renderOptions(query) {
      const q = (query || '').trim().toLowerCase();
      const list = popEl.querySelector('.tag-list');
      if (config.sections && config.sections.length) {
        list.innerHTML = config.sections.map(function (section, sectionIndex) {
          const options = section.options.map(normalizeOption).filter(function (option) {
            if (!q) return true;
            return option.label.toLowerCase().indexOf(q) !== -1;
          });
          if (!options.length) return '';
          var divider = sectionIndex > 0 ? '<div class="menu-divider" role="presentation"></div>' : '';
          return divider + '<div class="menu-heading">' + section.heading + '</div>' + options.map(function (option) {
            const label = option.label;
            const disabled = option.disabled;
            return '<div class="tag-option ' + (label === working ? 'selected' : '') + ' ' + (disabled ? 'disabled' : '') + '" role="option" ' + (disabled ? 'aria-disabled="true"' : 'tabindex="0"') + ' data-value="' + label + '"><span class="tag-option-label">' + label + '</span></div>';
          }).join('');
        }).join('');
      } else {
        list.innerHTML = config.options.map(function (opt) {
          const entry = normalizeSearchEntry(opt);
          if (entry.type === 'heading') return '<div class="menu-heading">' + entry.label + '</div>';
          const label = entry.label;
          const disabled = entry.disabled;
          if (q && label.toLowerCase().indexOf(q) === -1) return '';
          return '<div class="tag-option ' + (label === working ? 'selected' : '') + ' ' + (disabled ? 'disabled' : '') + '" role="option" ' + (disabled ? 'aria-disabled="true"' : 'tabindex="0"') + ' data-value="' + label + '"><span class="tag-option-label">' + label + '</span></div>';
        }).join('');
      }
      list.querySelectorAll('.tag-option:not(.disabled)').forEach(function (o) {
        o.addEventListener('click', function () {
          working = o.dataset.value;
          list.querySelectorAll('.tag-option').forEach(function (x) { x.classList.toggle('selected', x === o); });
        });
      });
    }

    function open() {
      if (popEl) return;
      state.editableCells.forEach(function (c) { if (c !== api) c.exitEdit(); });
      working = selected;
      popEl = document.createElement('div');
      popEl.className = 'tag-popover';
      popEl.innerHTML = '<div class="tag-search"><span class="tag-search-icon">' + ICON_SEARCH + '</span><input class="tag-search-input" type="text" aria-label="' + (config.ariaLabel || 'Search') + '"></div><div class="tag-list" role="listbox"></div><div class="tag-buttons"><button class="filter-btn-reset assignee-clear">' + (config.clearLabel || 'Clear assignment') + '</button><button class="filter-btn-apply assignee-save">Save</button></div>';
      document.body.appendChild(popEl);
      cell.classList.add('cell-edit-active');
      renderOptions('');
      position();
      window.addEventListener('scroll', position, true);
      window.addEventListener('resize', position);
      const input = popEl.querySelector('.tag-search-input');
      input.addEventListener('input', function () { renderOptions(input.value); });
      input.focus();
      popEl.querySelector('.assignee-clear').addEventListener('click', function (e) {
        e.stopPropagation();
        working = null;
        popEl.querySelectorAll('.tag-option').forEach(function (x) { x.classList.remove('selected'); });
      });
      popEl.querySelector('.assignee-save').addEventListener('click', function (e) {
        e.stopPropagation();
        selected = working;
        if (config.onChange) config.onChange(selected);
        close();
        renderDisplay();
      });
    }

    function close() {
      if (popEl) {
        popEl.remove();
        popEl = null;
      }
      window.removeEventListener('scroll', position, true);
      window.removeEventListener('resize', position);
      cell.classList.remove('cell-edit-active');
    }

    document.addEventListener('click', function (e) {
      if (popEl && !popEl.contains(e.target) && !cell.contains(e.target)) close();
    });
    document.addEventListener('keydown', function (e) {
      if (popEl && e.key === 'Escape') close();
    });

    renderDisplay();
  }

  function setupEditableCellMenu(cell, config, state) {
    let selected = config.value || null;
    let menuOpen = false;
    let menuEl = null;

    const api = { exitEdit: function () { if (cell.classList.contains('editing')) renderDisplay(); } };
    state.editableCells.add(api);

    function renderDisplay() {
      closeMenu();
      cell.classList.remove('editing', 'menu-open', 'cell-edit-active');
      menuOpen = false;
      cell.innerHTML = '<div class="cell-display"><span class="cell-display-text">' + (selected || '') + '</span><button class="icon-btn icon-btn--reveal edit-btn" aria-label="' + (config.ariaLabel || 'Edit') + '">' + ICON_PENCIL + '</button></div>';
      cell.querySelector('.edit-btn').addEventListener('click', function (e) {
        e.stopPropagation();
        enterEdit(true);
      });
    }

    function enterEdit(openMenu) {
      state.editableCells.forEach(function (other) { if (other !== api) other.exitEdit(); });
      cell.classList.add('editing', 'cell-edit-active');
      cell.innerHTML = '<div class="cell-field" tabindex="0"><span class="cell-field-value">' + (selected || '') + '</span><span class="cell-field-chevron">' + ICON_COLLAPSE + '</span></div>';
      cell.querySelector('.cell-field').addEventListener('click', function (e) {
        e.stopPropagation();
        menuOpen ? closeMenu() : openMenuList();
      });
      if (openMenu) openMenuList();
    }

    function positionMenu() {
      if (!menuEl) return;
      const field = cell.querySelector('.cell-field');
      if (!field) return;
      const r = field.getBoundingClientRect();
      menuEl.style.top = r.bottom + 'px';
      menuEl.style.left = r.left + 'px';
    }

    function openMenuList() {
      if (menuEl) return;
      menuEl = document.createElement('div');
      menuEl.className = 'cell-menu';
      menuEl.innerHTML = (config.heading ? '<div class="menu-heading">' + config.heading + '</div>' : '') + config.options.map(function (opt) {
        const option = normalizeOption(opt);
        const label = option.label;
        const disabled = option.disabled;
        return '<div class="menu-option ' + (label === selected ? 'selected' : '') + ' ' + (disabled ? 'disabled' : '') + '" ' + (disabled ? 'aria-disabled="true"' : 'tabindex="0"') + ' data-value="' + label + '">' + label + '</div>';
      }).join('');
      document.body.appendChild(menuEl);
      cell.classList.add('menu-open');
      menuOpen = true;
      positionMenu();
      window.addEventListener('scroll', positionMenu, true);
      window.addEventListener('resize', positionMenu);
      menuEl.querySelectorAll('.menu-option:not(.disabled)').forEach(function (o) {
        o.addEventListener('click', function (e) {
          e.stopPropagation();
          selected = o.dataset.value;
          if (config.onChange) config.onChange(selected);
          closeMenu();
          const val = cell.querySelector('.cell-field-value');
          if (val) val.textContent = selected;
        });
      });
    }

    function closeMenu() {
      if (menuEl) {
        menuEl.remove();
        menuEl = null;
      }
      window.removeEventListener('scroll', positionMenu, true);
      window.removeEventListener('resize', positionMenu);
      cell.classList.remove('menu-open');
      menuOpen = false;
    }

    document.addEventListener('click', function (e) {
      if (cell.classList.contains('editing') && !cell.contains(e.target) && !(menuEl && menuEl.contains(e.target))) {
        renderDisplay();
      }
    });

    renderDisplay();
  }

  function setupEditableCell(cell, config, state, mode) {
    if (!cell) return;
    if (mode === 'search') {
      setupEditableCellSearch(cell, config, state);
      return;
    }
    setupEditableCellMenu(cell, config, state);
  }

  function setupTagCell(cell, row, state) {
    if (!cell) return;
    let popEl = null;
    let working = null;

    function renderBadges() {
      const badgesEl = cell.querySelector('.badges');
      badgesEl.innerHTML = tagBadgesHtml(row.tags);
    }

    function position() {
      if (!popEl) return;
      const r = cell.getBoundingClientRect();
      popEl.style.top = r.bottom + 4 + 'px';
      const left = clampPopoverLeft(r.left, popEl.offsetWidth);
      popEl.style.left = left + 'px';
    }

    function syncOption(o) {
      const on = working.includes(o.dataset.tag);
      o.classList.toggle('selected', on);
      o.querySelector('.tag-option-check').innerHTML = on ? ICON_CHECKBOX_ON : ICON_CHECKBOX_OFF;
    }

    function renderOptions() {
      const list = popEl.querySelector('.tag-list');
      list.innerHTML = ALL_TAGS.map(function (t) {
        const on = working.includes(t.t);
        return '<div class="tag-option ' + (on ? 'selected' : '') + '" role="option" tabindex="0" data-tag="' + t.t + '"><span class="tag-option-check">' + (on ? ICON_CHECKBOX_ON : ICON_CHECKBOX_OFF) + '</span><span class="tag-option-label">' + t.t + '</span></div>';
      }).join('');
      list.querySelectorAll('.tag-option').forEach(function (o) {
        o.addEventListener('click', function () {
          const tag = o.dataset.tag;
          const idx = working.indexOf(tag);
          if (idx >= 0) working.splice(idx, 1);
          else working.push(tag);
          syncOption(o);
        });
      });
    }

    function syncAllOptions() {
      if (!popEl) return;
      popEl.querySelectorAll('.tag-option').forEach(syncOption);
    }

    function open() {
      if (popEl) return;
      state.editableCells.forEach(function (c) { c.exitEdit(); });
      working = row.tags.map(function (t) { return t.t; });
      popEl = document.createElement('div');
      popEl.className = 'tag-popover';
      popEl.innerHTML = '<div class="tag-search"><span class="tag-search-icon">' + ICON_SEARCH + '</span></div><div class="tag-list" role="listbox" aria-multiselectable="true"></div><div class="tag-buttons"><button class="filter-btn-reset tag-deselect">Deselect all</button><button class="filter-btn-apply tag-save">Save</button></div>';
      document.body.appendChild(popEl);
      cell.classList.add('cell-edit-active');
      renderOptions();
      position();
      window.addEventListener('scroll', position, true);
      window.addEventListener('resize', position);
      popEl.querySelector('.tag-deselect').addEventListener('click', function (e) {
        e.stopPropagation();
        working = [];
        syncAllOptions();
      });
      popEl.querySelector('.tag-save').addEventListener('click', function (e) {
        e.stopPropagation();
        row.tags = ALL_TAGS.filter(function (t) { return working.includes(t.t); }).map(function (t) { return { t: t.t, v: t.v }; });
        renderBadges();
        close();
      });
    }

    function close() {
      if (popEl) {
        popEl.remove();
        popEl = null;
      }
      window.removeEventListener('scroll', position, true);
      window.removeEventListener('resize', position);
      cell.classList.remove('cell-edit-active');
    }

    state.editableCells.add({ exitEdit: function () { if (popEl) close(); } });
    cell.querySelector('.tags-edit-btn').addEventListener('click', function (e) {
      e.stopPropagation();
      popEl ? close() : open();
    });
    document.addEventListener('click', function (e) {
      if (popEl && !popEl.contains(e.target) && !cell.contains(e.target)) close();
    });
    document.addEventListener('keydown', function (e) {
      if (popEl && e.key === 'Escape') close();
    });
  }

  function buildRow(r, i, state, variant, assigneeMode) {
    const dispatch = variant === 'dispatch';
    const row = document.createElement('div');
    row.className = 'grid-row';
    row.innerHTML = buildRowHtml(r, i, variant);

    row.querySelector('.toggle-btn').addEventListener('click', function () {
      row.classList.toggle('expanded');
    });

    const moreOptions = dispatch
      ? ['Edit driver / route', 'Add on', 'Reset order', 'View equipment']
      : ['Schedule order', 'Reset order', 'View equipment'];

    setupMenuPopover(row.querySelector('.more-btn'), {
      options: moreOptions,
      align: 'right',
      onSelect: function (value) {
        if (value === 'View equipment') openSideSheet(r.order, state);
        if (value === 'Edit driver / route' && dispatch) openEditDriverRouteModal(r, state);
      }
    }, state);

    if (!dispatch) {
      const dispatchEnabled = r.status && (r.status.t === 'Rescheduled' || r.status.t === 'Confirmed');
      const options = buildAssigneeOptions(assigneeMode, dispatchEnabled);

      setupEditableCell(row.querySelector('.col-assignee.editable-cell'), {
        value: r.assignee || null,
        options: options,
        heading: assigneeMode === 'search' ? null : 'Select assignee',
        ariaLabel: 'Edit assignee',
        onChange: function (v) { r.assignee = v; }
      }, state, assigneeMode);
    } else {
      setupEditableCell(row.querySelector('.col-driver.editable-cell'), {
        value: r.driver || null,
        options: [],
        sections: DRIVER_SECTIONS,
        clearLabel: 'Clear driver',
        ariaLabel: 'Edit driver',
        renderDisplay: function (value) {
          var text = String(value || '').trim();
          if (!text) return '<span class="cell-main">–</span>';
          return '<span class="cell-main link" tabindex="0">' + text + '</span>';
        },
        onChange: function (v) { r.driver = v || ''; }
      }, state, 'search');
    }

    setupTagCell(row.querySelector('.col-tags.editable-cell'), r, state);
    return row;
  }

  function wireRowSelection(rowEls, state) {
    const selectAllEl = document.getElementById('selectAll');
    if (!selectAllEl) return;

    function isSel(el) {
      return el.classList.contains('selected');
    }

    function setRowSelected(el, on) {
      el.classList.toggle('selected', on);
      const cb = el.querySelector('.row-checkbox');
      cb.innerHTML = on ? ICON_CHECKBOX_ON : ICON_CHECKBOX_OFF;
      cb.setAttribute('aria-checked', on ? 'true' : 'false');
    }

    function updateSelectAll() {
      const n = rowEls.filter(isSel).length;
      const rowCount = rowEls.length;
      const stateName = n === 0 ? 'off' : (n === rowCount ? 'on' : 'mixed');
      selectAllEl.innerHTML = stateName === 'on' ? ICON_CHECKBOX_ON : stateName === 'mixed' ? ICON_CHECKBOX_INDETERMINATE : ICON_CHECKBOX_OFF;
      selectAllEl.setAttribute('aria-checked', stateName === 'on' ? 'true' : stateName === 'mixed' ? 'mixed' : 'false');
    }

    function attachCheckbox(el, onToggle) {
      el.addEventListener('click', function (e) { e.stopPropagation(); onToggle(); });
      el.addEventListener('keydown', function (e) {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onToggle();
        }
      });
    }

    rowEls.forEach(function (el) {
      attachCheckbox(el.querySelector('.row-checkbox'), function () {
        setRowSelected(el, !isSel(el));
        updateSelectAll();
      });
    });

    selectAllEl.innerHTML = ICON_CHECKBOX_OFF;
    attachCheckbox(selectAllEl, function () {
      const allOn = rowEls.every(isSel);
      rowEls.forEach(function (el) { setRowSelected(el, !allOn); });
      updateSelectAll();
    });
  }

  function wireToolbarIcons() {
    document.querySelectorAll('.filter-check').forEach(function (el) { el.innerHTML = ICON_CHECK; });
    const filterToggle = document.querySelector('.filter-toggle-btn');
    if (filterToggle) filterToggle.insertAdjacentHTML('afterbegin', ICON_FILTER);
    document.querySelectorAll('.table-actions .action-btn').forEach(function (btn) {
      const label = (btn.getAttribute('aria-label') || '').toLowerCase();
      if (label.indexOf('export') !== -1) btn.innerHTML = ICON_EXPORT;
      else if (label.indexOf('history') !== -1) btn.innerHTML = ICON_HISTORY;
      else if (label.indexOf('column') !== -1) btn.innerHTML = ICON_COLUMNS;
      else if (label.indexOf('setting') !== -1) btn.innerHTML = ICON_SETTINGS;
    });
    document.querySelectorAll('.chip-remove').forEach(function (el) { el.innerHTML = ICON_CHIP_REMOVE; });
  }

  function wireQuickFilters(rowEls) {
    const FILTER_PREDICATES = {
      'STAT / Urgent': function (r) { return r.priority === 'STAT' || r.priority === 'Urgent'; },
      'STAT/Urgent': function (r) { return r.priority === 'STAT' || r.priority === 'Urgent'; },
      'SLA approaching': function (r) { return r.status && (r.status.t === 'Patient Scheduling' || r.status.t === 'Patient Approval' || r.status.t === 'Provider Review'); },
      'Missed schedule': function (r) { return r.status && r.status.t === 'Escalated'; },
      'Delayed': function (r) { return (r.etaCaption || '').trim().toLowerCase() === 'delayed'; },
      'New note': function (r) { return r.note === true; },
      'Rescheduled': function (r) { return r.status && r.status.t === 'Rescheduled'; }
    };

    function applyFilter(activeFilter) {
      const pred = activeFilter ? FILTER_PREDICATES[activeFilter] : null;
      rowEls.forEach(function (el) {
        el.style.display = (!pred || pred(el._data)) ? '' : 'none';
      });
    }

    document.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const wasActive = btn.classList.contains('active');
        document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
        if (!wasActive) btn.classList.add('active');
        const active = document.querySelector('.filter-btn.active');
        applyFilter(active ? active.dataset.filter : null);
      });
    });

    const active = document.querySelector('.filter-btn.active');
    if (active) applyFilter(active.dataset.filter);
  }

  function openSideSheet(orderId, state) {
    if (state.sheetEl) state.sheetEl.remove();
    const sheetEl = document.createElement('div');
    state.sheetEl = sheetEl;
    sheetEl.className = 'side-sheet';
    sheetEl.innerHTML = buildSideSheetHtml(orderId);
    document.body.appendChild(sheetEl);
    void sheetEl.offsetWidth;
    sheetEl.classList.add('open');
    sheetEl.querySelector('.side-sheet-close').addEventListener('click', function () { closeSideSheet(state); });
  }

  function closeSideSheet(state) {
    if (!state.sheetEl) return;
    const el = state.sheetEl;
    state.sheetEl = null;
    el.classList.remove('open');
    el.addEventListener('transitionend', function () { el.remove(); }, { once: true });
  }

  function openEditDriverRouteModal(row, state) {
    closeEditDriverRouteModal(state);
    const overlayEl = document.createElement('div');
    state.editDriverRouteModalEl = overlayEl;
    overlayEl.className = 'edit-driver-route-overlay';
    overlayEl.innerHTML = buildEditDriverRouteModalHtml(row);
    document.body.appendChild(overlayEl);

    function close() {
      closeEditDriverRouteModal(state);
    }

    const modalEl = overlayEl.querySelector('.edit-driver-route-modal');
    overlayEl.addEventListener('click', function (e) {
      if (!modalEl.contains(e.target)) close();
    });
    overlayEl.querySelector('.edit-driver-route-close').addEventListener('click', close);
    overlayEl.querySelector('.edit-driver-route-btn-cancel').addEventListener('click', close);
    overlayEl.querySelector('.edit-driver-route-btn-save').addEventListener('click', close);
  }

  function closeEditDriverRouteModal(state) {
    if (!state.editDriverRouteModalEl) return;
    state.editDriverRouteModalEl.remove();
    state.editDriverRouteModalEl = null;
  }

  function setupTagsOverflowPopover() {
    let popEl = null;

    function show(target) {
      if (popEl) hide();
      let overflowTags;
      try {
        overflowTags = JSON.parse(decodeURIComponent(target.dataset.overflow || '[]'));
      } catch (e) {
        return;
      }
      if (!overflowTags.length) return;

      popEl = document.createElement('div');
      popEl.className = 'cell-menu tags-overflow-pop';
      popEl.innerHTML = '<svg class="tags-overflow-pop-arrow" viewBox="0 0 28 10" xmlns="http://www.w3.org/2000/svg"><polygon points="0,10 14,0 28,10" fill="white"/></svg>' + overflowTags.map(badge).join('');
      document.body.appendChild(popEl);

      const r = target.getBoundingClientRect();
      const popW = popEl.offsetWidth;
      let left = r.left + r.width / 2 - popW / 2;
      left = Math.max(8, Math.min(left, window.innerWidth - popW - 8));
      popEl.style.left = left + 'px';
      popEl.style.top = r.bottom + 4 + 'px';

      const arrowEl = popEl.querySelector('.tags-overflow-pop-arrow');
      if (arrowEl) {
        const arrowLeft = (r.left + r.width / 2) - parseFloat(popEl.style.left) - 14;
        arrowEl.style.left = arrowLeft + 'px';
        arrowEl.style.transform = 'none';
      }
    }

    function hide() {
      if (popEl) {
        popEl.remove();
        popEl = null;
      }
    }

    document.addEventListener('mouseover', function (e) {
      const target = e.target.closest('.tags-overflow[data-overflow]');
      if (target) show(target);
    });
    document.addEventListener('mouseout', function (e) {
      if (popEl && e.target.closest('.tags-overflow[data-overflow]')) hide();
    });
  }

  function setupHistoryPopover() {
    const trigger = document.getElementById('historyBtn');
    if (!trigger) return;
    let popEl = null;

    function position() {
      if (!popEl) return;
      const r = trigger.getBoundingClientRect();
      popEl.style.top = r.bottom + 4 + 'px';
      let left = r.left + r.width / 2 - popEl.offsetWidth / 2;
      if (left < 0) left = 0;
      else if (left + popEl.offsetWidth > window.innerWidth) left = window.innerWidth - popEl.offsetWidth;
      popEl.style.left = left + 'px';
    }

    function open() {
      if (popEl) return;
      popEl = document.createElement('div');
      popEl.className = 'history-popover';
      popEl.innerHTML = buildHistoryPopoverHtml();
      document.body.appendChild(popEl);
      trigger.classList.add('active');
      position();
      window.addEventListener('scroll', position, true);
      window.addEventListener('resize', position);
    }

    function close() {
      if (popEl) {
        popEl.remove();
        popEl = null;
      }
      window.removeEventListener('scroll', position, true);
      window.removeEventListener('resize', position);
      trigger.classList.remove('active');
    }

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      popEl ? close() : open();
    });
    document.addEventListener('click', function (e) {
      if (popEl && !popEl.contains(e.target) && e.target !== trigger) close();
    });
  }

  function setupFilterPopover(variant) {
    const trigger = document.getElementById('filterToggleBtn');
    if (!trigger) return;
    let popEl = null;

    function field(label, options) {
      const opts = options || {};
      const chips = opts.chips || [];
      const chipHtml = chips.map(function (c) {
        return '<span class="filter-chip">' + c + (opts.removable ? '<button class="chip-remove">' + ICON_CHIP_REMOVE + '</button>' : '') + '</span>';
      }).join('');
      return '<div class="filter-field"><span class="filter-field-label">' + label + (opts.required ? ' <span class="req">*</span>' : '') + '</span><div class="filter-input">' +
        (opts.search ? '<span class="filter-input-search">' + ICON_SEARCH + '</span>' : '') +
        '<span class="filter-input-content">' + chipHtml + '</span><span class="filter-input-chevron">' + ICON_CHEVRON_DOWN + '</span></div></div>';
    }

    function position() {
      if (!popEl) return;
      const r = trigger.getBoundingClientRect();
      popEl.style.top = r.bottom + 4 + 'px';
      const left = clampPopoverLeft(r.left, popEl.offsetWidth);
      popEl.style.left = left + 'px';
    }

    function open() {
      if (popEl) return;
      popEl = document.createElement('div');
      popEl.className = 'filter-popover';

      if (variant === 'dispatch') {
        function chipGroupField(label, options) {
          return '<div class="filter-field"><span class="filter-field-label">' + label + ' <span class="req">*</span></span><div class="filter-chips-row">' +
            options.map(function (opt) {
              var active = !!opt.active;
              return '<button class="filter-chip-toggle ' + (active ? 'is-active' : 'is-inactive') + '" type="button">' +
                (active ? '<span class="chip-check">' + ICON_CHECK + '</span>' : '') +
                '<span>' + opt.label + '</span></button>';
            }).join('') +
            '</div></div>';
        }

        popEl.innerHTML =
          field('Warehouses', { search: true, chips: ['2 warehouses selected'] }) +
          chipGroupField('Order status', [
            { label: 'Open', active: true },
            { label: 'Closed last 48 hours', active: true }
          ]) +
          chipGroupField('Schedule date', [
            { label: 'Yesterday', active: false },
            { label: 'Today', active: true },
            { label: 'Tomorrow', active: true }
          ]) +
          field('Order reason') +
          field('Order priority') +
          field('Driver', { search: true }) +
          field('Route') +
          field('Tags', { search: true }) +
          '<div class="filter-buttons"><button class="filter-btn-reset">Reset</button><button class="filter-btn-apply">Filter</button></div>';

        document.body.appendChild(popEl);
        trigger.classList.add('active');
        position();
        window.addEventListener('scroll', position, true);
        window.addEventListener('resize', position);
        return;
      }

      const assignedToHtml = variant === 'manager'
        ? field('Assigned to', { search: true })
        : '<div class="filter-field"><span class="filter-field-label">Assigned to <span class="req">*</span></span><div class="filter-chips-row"><button class="filter-chip-toggle"><span class="chip-check">' + ICON_CHECK + '</span>Me</button><button class="filter-chip-toggle"><span class="chip-check">' + ICON_CHECK + '</span>Unassigned</button></div></div>';

      popEl.innerHTML =
        field('Warehouses', { search: true, chips: ['2 warehouses selected'] }) +
        field('Order type') +
        field('Order priority') +
        field('Order reason') +
        field('Schedule status', { chips: ['Patient Scheduling', 'Patient Approval', 'Provider Review', 'Escalated', 'Rescheduled'], removable: true }) +
        field('Tags') +
        assignedToHtml +
        '<div class="filter-buttons"><button class="filter-btn-reset">Reset</button><button class="filter-btn-apply">Filter</button></div>';

      document.body.appendChild(popEl);
      trigger.classList.add('active');
      position();
      window.addEventListener('scroll', position, true);
      window.addEventListener('resize', position);
    }

    function close() {
      if (popEl) {
        popEl.remove();
        popEl = null;
      }
      window.removeEventListener('scroll', position, true);
      window.removeEventListener('resize', position);
      trigger.classList.remove('active');
    }

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      popEl ? close() : open();
    });
    document.addEventListener('click', function (e) {
      if (popEl && !popEl.contains(e.target) && e.target !== trigger) close();
    });
  }

  function cloneRows(rows) {
    return JSON.parse(JSON.stringify(rows));
  }

  function init(config) {
    const cfg = config || {};
    const variant = cfg.variant === 'manager' ? 'manager' : cfg.variant === 'dispatch' ? 'dispatch' : 'scheduling';
    const assigneeMode = cfg.assigneeMode || (variant === 'manager' ? 'search' : 'menu');
    const DISPATCH_ROWS = window.SMART_ROUTING_DISPATCH_ROWS || DEFAULT_ROWS;
    const rows = cloneRows(cfg.rows || (variant === 'dispatch' ? DISPATCH_ROWS : DEFAULT_ROWS));
    const container = document.getElementById('rows');
    if (!container) return;

    const state = {
      editableCells: new Set(),
      openMenuPopovers: new Set(),
      sheetEl: null,
      editDriverRouteModalEl: null
    };

    container.innerHTML = '';
    const rowEls = rows.map(function (r, i) {
      const el = buildRow(r, i, state, variant, assigneeMode);
      el._data = r;
      container.appendChild(el);
      return el;
    });

    if (variant === 'manager' || variant === 'dispatch') {
      wireRowSelection(rowEls, state);
    }

    wireToolbarIcons();
    wireQuickFilters(rowEls);

    setupMenuPopover(document.getElementById('settingsBtn'), {
      heading: 'Row density',
      options: ['Condensed', 'Standard', 'Relaxed'],
      selected: 'Standard',
      align: 'right',
      onSelect: function (value) { document.body.dataset.density = value.toLowerCase(); }
    }, state);

    setupTagsOverflowPopover();
    setupHistoryPopover();
    setupFilterPopover(variant);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeSideSheet(state);
        closeEditDriverRouteModal(state);
      }
    });
  }

  window.SmartRoutingGrid = {
    init: init
  };
})();
