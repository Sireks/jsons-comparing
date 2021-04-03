const translations = {
  'en': {
    locale: {
      name: 'English',
    },
  
    // Show human-readable brand name instead of brand id
    BRANDS: {
      everfxglobal: 'EverFX',
      everfx: 'EverFX',
      virtualstocks: 'Virtualfunds',
      fxrevolution: 'revolution-fx',
    },
  
    COMMON: {
      AMOUNT: 'Amount',
      APPLY: 'Apply',
      SAVE: 'Save',
      COPY: 'Copy',
      RESET_FILTERS: 'Reset filters',
      CANCEL: 'Cancel',
      CONFIRM: 'Confirm',
      CLOSE: 'Close',
      DEPOSIT: 'Deposit',
      LOGOUT: 'Logout',
      BALANCE: 'Balance',
      SEND: 'Send',
      CONTINUE: 'Continue',
      SEND_REQUEST: 'Send request',
      BACK: 'Back',
      FILL_IN_NOW: 'Fill in now',
      CHECKOUT_NOW: 'Checkout now',
      TRANSFER_FUNDS: 'Transfer funds',
      WITHDRAW: 'Withdraw',
      DATE_ON: 'on {{date}}',
      ID: 'ID',
      FOR: 'for',
      SELECT: 'Select',
      NO_ITEMS: 'No items',
      PAYMENT_STATUS: {
        PENDING: 'Pending',
        COMPLETED: 'Completed',
        REJECTED: 'Rejected',
        FAILED: 'Failed',
        CANCELED: 'Canceled',
      },
      PAYMENT_TYPE: {
        DEPOSIT: 'Deposit',
        WITHDRAW: 'Withdraw',
        CONFISCATE: 'Confiscate',
        TRANSFER_IN: 'Transfer in',
        TRANSFER_OUT: 'Transfer Out',
        CREDIT_IN: 'Credit in',
        CREDIT_OUT: 'Credit out',
        FEE: 'Fee',
        INACTIVITY_FEE: 'Inactivity fee',
        INTEREST_RATE: 'Interest rate',
        DEMO_DEPOSIT: 'Deposit',
      },
      TRADING_ACCOUNT_TYPES: {
        LIVE: 'Live',
        DEMO: 'Demo',
      },
      DATE_OPTIONS: {
        START_DATE: 'From',
        END_DATE: 'To',
      },
      SELECT_OPTION: {
        NO_ITEMS: '-- No items --',
      },
      ARCHIVED: 'Archived',
    },
  
    MODALS: {
      DOCUMENTS_UPLOAD_MODAL: {
        TITLE: 'Documents upload',
        UPLOADING_DOCUMENTS: 'Uploading documents',
        INFO: 'Make sure images of your document are sharp and the text is easily readable. Maximum file size is 10mb and supported formats are PNG, JPG.',
        DOCUMENTS: 'Documents',
        UPLOADED: 'Uploaded',
        SUCCESS_UPLOAD_MESSAGE: 'All documents uploaded successfully',
  
        FORM: {
          DOCUMENT_TYPE: 'Document Type',
          SELECT_DOCUMENT_TYPE: 'Select document type',
          DOCUMENT_TYPES: {
            'licence-front': 'Driving license - Front side',
            'licence-back': 'Driving license - Back side',
            'id-front': 'ID Card - Front',
            'id-back': 'ID Card - Back',
            'other': 'Other',
          },
        },
      },
      DEPOSIT_MODAL: {
        TITLE: {
          CASHIER: 'Cashier',
          FAIL: 'Cashier - Payment has failed',
          CANCEL: 'Cashier - Payment has been canceled',
          SUCCESS: 'Cashier - Successful payment',
        },
        DEPOSIT_TO_ACCOUNT: 'Depositing to your trading account',
        DEPOSIT_INFO: 'Simply deposit to one of you trading accounts by selecting it from the list, choosing a payment method and defining the desired deposit amount.',
        PAYMENTS_SECURED_BY: 'Payment are secured by:',
        NEW_DEPOSIT: 'New deposit',
        FAIL: 'Unfortunately your payment has failed, please try again or use another payment method',
        CANCEL: 'Your payment has been cancelled',
        SUCCESS: 'Congratulations!<br/>Your payment was successful',
        FORM: {
          SELECT_TRADING_ACCOUNT: 'Select trading account',
          CHOOSE_PAYMENT_METHOD: 'Choose payment method',
        },
      },
      TRANSFER_MODAL: {
        TITLE: 'Cashier',
        TRANSFER_FUNDS_SUCCESS: 'Funds successfully transferred!',
        TRANSFER_BETWEEN_ACCOUNTS: 'Transfering funds between your trading accounts',
        TRANSFER_INFO: 'Transfered funds will immediately be converted and credited to your trading account.',
        PAYMENTS_SECURED_BY: 'Payment are secured by:',
        TRANSFER_FUNDS: 'Transfer funds',
        NOTE: 'Note: The transfer amount will be converted with a conversion rate provided by MT4 Server',
        EXCHANGE_RATE: 'Exchange rate applies',
  
        FORM: {
          TO_TRADING_ACCOUNT: 'To trading account',
          FROM_TRADING_ACCOUNT: 'From trading account',
        },
      },
      WITHDRAW_MODAL: {
        TITLE: 'Cashier',
        WITHDRAW_FROM_ACCOUNT: 'Withdrawing from trading account',
        WITHDRAW_INFO: 'Request withdrawal from one of you trading accounts by selecting an account from the list, choosing a payment account and defining the desired withdrawal amount.',
        PAYMENTS_SECURED_BY: 'Payment are secured by:',
        WITHDRAW_REQUEST: 'Withdraw request',
        NOTE: 'Note: Withdrawal request will be reviewed by our operator within 24 hours.',
        WITHDRAW_MODAL_SUCCESS: 'Withdraw request sent successfully',
  
        FORM: {
          FROM_TRADING_ACCOUNT: 'From trading account',
        },
      },
      UPDATE_VERSION_MODAL: {
        TITLE: 'Update your client portal version',
        TEXT: 'Client portal has been updated. To continue working with it click the button below. It will reload the page and update you version.',
        UPDATE_NOW: 'Update now',
      },
      DOWNLOAD_APP_MODAL: {
        TITLE: 'Download application',
        MT4_TRADING_PLATFORM: 'MT4 Trading platform',
        TEXT: 'The award-winning MT4 trading platform comes with all the advanced features that helped make MetaTrader the most popular forex trading platform in the world today.',
        MORE_INFO: 'More info in our ',
        KNOWLEDGE_BASE: ' knowledge base',
        INSTALL_APP_TITLE: 'To start trading you will need to install an application',
        DOWNLOAD_FREE_APP: 'Download free MT4 app',
        OTHER_APPS: 'Applications for other operating systems',
        OS: {
          ANDROID: 'Android',
          IOS: 'IOS',
          WINDOWS: 'Windows',
          MACOS: 'MacOS',
        },
      },
      NEW_TRADING_ACCOUNT_MODAL: {
        TITLE: 'New trading account',
        CREATING_TRADING_ACCOUNT: 'Creating a trading account',
        TRADING_ACCOUNT_CREATION_LIVE_DEMO: 'For maximum flexablity you can create up to {{maxLiveAccounts}} live trading accounts and up to {{maxDemoAccounts}} demo accounts.',
        TRADING_ACCOUNT_CREATION_LIVE: 'For maximum flexablity you can create up to {{maxLiveAccounts}} live trading accounts.',
        ACCOUNTS_DETAILS: 'Account details',
        ACCOUNT_CREATED: 'Account successfully created',
  
        FORM: {
          ACCOUNT_TYPE: 'Account Type',
          ACCOUNT_NAME: 'Account name',
          ACCOUNT_NAME_PLACEHOLDER: 'Name your new account',
          CURRENCY: 'Currency',
          PASSWORD: 'Trading Account Password',
          PASSWORD_PLACEHOLDER: 'Create password for trading account',
          PASSWORD_HINT: 'At least 8 symbols, 1 lowercase, 1 uppercase, 1 number',
          CREATE_ACCOUNT: 'Create account',
          PLATFORM_TYPE: 'Platform type',
        },
      },
      CHANGE_TRADING_ACCOUNT_PASSWORD_MODAL: {
        TITLE: 'Change trading account password',
        CHANGE_PASSWORD_FOR: 'Change password for - {{account}}',
        PASSWORD_CHANGED: 'Password changed successfully.',
  
        FORM: {
          PASSWORD: 'New password',
          PASSWORD_HINT: 'At least 8 symbols, 1 lowercase, 1 uppercase, 1 number',
          REPEAT_PASSWORD: 'Repeat password',
          REPEAT_PASSWORD_PLACEHOLDER: 'Repeat new password',
          CHANGE_PASSWORD: 'Change password',
        },
      },
      CHANGE_LEVERAGE_MODAL: {
        TITLE: 'Request to change leverage',
        LEVERAGE_CHANGED: 'Request to change leverage sent successfully',
        FORBIDDEN_CHANGE_LEVERAGE: 'You\'ve already made a \'Change leverage\' request which is in \'PENDING\' status. You can not create any more requests until this status changes',
  
        FORM: {
          CHANGE_LEVERAGE: 'Change leverage',
          MESSAGE: 'Please choose your preferred Leverage and request will be sent for review to our Backoffice Department.<br><br>Please note that leverage changes affect open positions. Lowering leverage may result in a margin closeout.',
        },
      },
      HISTORY_LEVERAGE_MODAL: {
        TITLE: 'leverage History',
        LEVERAGE: 'LEVERAGE',
        STATUS: 'STATUS',
        CHANGE_DATE: 'CHANGE DATE',
        HISTORY_LEVERAGE_NOT_FOUND: 'Not found change leverage history',
      },
      SECOND_STEP_REGISTRATION: {
        TITLE: 'Second step registration',
        FILL_ALL_FIELDS: 'Please fill in all fields',
        COMPLETE_PERSONAL_PROFILE: 'Complete your personal profile',
        TEXT: 'This information is required by financial regulations and helps us to protect you and your money. This will not require more than 5 minutes of your time.',
        PAYMENTS_SECURED_BY: 'Payment are secured by:',
        FORM: {
          FIRST_NAME: 'First name',
          FIRST_NAME_PLACEHOLDER: 'Your first name',
          LAST_NAME: 'Last name',
          LAST_NAME_PLACEHOLDER: 'Your last name',
          DATE_OF_BIRTH: 'Date of birth',
          CITY: 'City',
          POSTAL_CODE: 'Postal code',
          ADDRESS: 'Address',
          COUNTRY: 'Country',
          PASSWORD: 'Trading Account Password',
          PASSWORD_PLACEHOLDER: 'Create password for trading account',
          PASSWORD_HINT: 'At least 8 symbols, 1 lowercase, 1 uppercase, 1 number',
          REPEAT_PASSWORD: 'Repeat password',
          REPEAT_PASSWORD_PLACEHOLDER: 'Make sure it’s the same as above',
        },
      },
      CANCEL_TRANSACTION_MODAL: {
        TITLE: 'Cancel the withdrawal request',
        TEXT: 'Would you like to cancel the withdrawal request?',
        CANCEL_TRANSACTION_SUCCESS: 'Transaction successfully canceled',
      },
      CONFIRM_CALLBACK_REQUEST: {
        TITLE: 'Confirming a callback request',
        TEXT: 'Do you need a consultant\'s help? We are ready to help!<br>We will be happy to answer your questions, your personal manager will call you back within 30 minutes.',
        NOTIFICATION: 'The operator will contact you shortly',
        ALREADY_SENT_TEXT: 'You have already sent Callback request.<br>Your personal manager will call you back within 30 minutes.',
      },
    },
  
    TRANSACTIONS_HISTORY: {
      TITLE: 'Transactions history',
      TRADING_ACC: 'Trading Acc.',
      PAYMENT_METHOD: 'Payment method',
      TRANSACTION: 'Transaction',
      TYPE: 'Type',
      AMOUNT: 'Amount',
      DATE_AND_TIME: 'Date & time',
      STATUS: 'Status',
      NO_TRANSACTIONS: 'No transactions available',
    },
  
    SIDEBAR_MENU: {
      DASHBOARD: 'Dashboard',
      FINANCE: 'Finance',
      TRADING: 'Trading',
      ACCOUNTS: 'Accounts',
      HISTORY: 'History',
      DOCUMENTS: 'Documents',
      REFERRAL_PROGRAM: 'Referral Program',
      MY_PROFILE: 'My Profile',
      PERSONAL_INFO: 'Personal Info',
      CHANGE_PASSWORD: 'Change Password',
      DOWNLOAD_MT4: 'Download MT4',
      TERMS_AND_CONDITIONS: 'Terms and Conditions',
    },
  
    SIDEBAR_INFO: {
      HELLO: 'Hello',
    },
  
    FILE_DROPZONE_UPLOAD: {
      DRAG_AND_DROP: 'Drag and drop files here',
      BROWSE_FILES: 'Browse files',
      WARNING: 'Please notice.<br>Supported formats are .pdf .jpeg .jpg .png. doc .docx .odt.<br>The maximum size of a single file is 16 Mb.<br>The maximum size of a batch of files is 100 Mb.',
      ERRORS: {
        INVALID_SIZE: 'File size should not exceed 16 Mb.',
        INVALID_TYPE: 'Wrong file format.',
        INVALID_TOTAL_SIZE: 'The total size of uploaded files should not exceed 100 Mb.',
        COMMON: 'Some of the uploaded files have invalid format or size. Please fix this and try to upload them again.',
      },
    },
  
    ERROR_BOUNDARY: {
      TITLE: 'Error',
      DESCRIPTION: 'Something went wrong',
      TRY_RELOAD_PAGE: 'Try to reload page',
      RELOAD_PAGE: 'Reload page',
    },
  
    FOOTER: {
      COPYRIGHTS: '© {{year}} {{brand}}, Inc. All Rights Reserved.',
    },
  
    NO_FOUND_TRADING_ACCOUNTS_OPTION: {
      NO_ACCOUNTS: 'No trading accounts available',
      CREATE_ACCOUNT: 'Create account',
    },
  
    SIGN_IN: {
      TITLE: 'SIGN IN',
      DONT_HAVE_ACCOUNT: 'Do not have an account yet?',
      SIGN_UP_NOW: 'Sign up now',
      FORGOT_PASSWORD: 'Forgot your password?',
  
      FORM: {
        EMAIL: 'Email',
        EMAIL_PLACEHOLDER: 'Your email address',
        PASSWORD: 'Password',
        PASSWORD_PLACEHOLDER: 'At least {{signsNum}} signs',
        LOGIN: 'LOGIN',
      },
    },
  
    SIGN_UP: {
      TITLE: 'SIGN UP',
      ZERO_COMMISSIONS: 'ZERO COMMISSIONS',
      INFO: '- Trade more with less<br/>- No commissions<br/>- Competitive spreads<br/>- Fast execution<br/>',
      NOTE: 'Note: Trading involves significant risk of loss',
      ALREADY_REGISTERED: 'Already registered?',
      SIGN_IN_HERE: 'Sign in here',
  
      FORM: {
        FIRST_NAME: 'First name',
        FIRST_NAME_PLACEHOLDER: 'Your first name',
        LAST_NAME: 'Last name',
        LAST_NAME_PLACEHOLDER: 'Your last name',
        EMAIL: 'E-mail',
        EMAIL_PLACEHOLDER: 'Your email address',
        PASSWORD: 'Password',
        PASSWORD_PLACEHOLDER: 'At least {{signsNum}} signs',
        PASSWORD_HINT: 'Password should contain at least one letter and one digit',
        COUNTRY: 'Country',
        PHONE: 'Phone',
        PHONE_PLACEHOLDER: 'Your phone',
        NOT_USA_CITIZEN: 'I\'m not a USA citizen.',
        TERMS_AND_CONDITIONS: 'Terms and Conditions',
        COMPANY_POLICY: 'Company Policies',
        PRIVACY_POLICY: 'Privacy Policy',
        RISK_ACKNOWLEDGEMENT: 'Risk Acknowledgement',
        DISCLAIMER: 'Disclaimer',
        POLICY: 'policy',
        ACCEPT_TERMS: 'I have read and accept the {{termsAndConditions}} of the Client Agreement, {{companyPolicy}}, {{privacyPolicy}}, {{riskAcknowledgement}} and {{disclaim}}. I also acknowledge and consent to the processing of my personal data in accordance to the {{brandIdLink}}.',
        AGREE_OPEN_ACCOUNT: 'I would like to open an account with {{brandId}}. I do confirm I have approached {{brandId}} on my own volition and initiative. I also agree to be contacted by the Company’s representatives via phone and / or email.',
        TERM_STATEMENT: 'terms\'s statement',
        ALLOWED_AGE: 'I am over 18 years of age.'
      },
    },
  
    RESET_PASSWORD: {
      TITLE: 'Reset password',
      REMEMBER_PASSWORD: 'Remember the password?',
      SIGN_IN: 'Sign in',
      ENTER_EMAIL: 'Please enter the email you have signed up with',
  
      FORM: {
        EMAIL: 'Email',
        EMAIL_PLACEHOLDER: 'Your email address',
      },
  
      SUCCESS: {
        CHECK_INBOX: 'Check your inbox',
        EMAIL_SENT_TO: 'We’ve sent an email to',
        WITH_INSTRUCTIONS: 'with detailed instructions on how to reset your password.',
        CHECK_SPAM: 'Don’t forget to check your spam folder just in case you have not received the email.',
        LOGIN_NOW: 'LOGIN NOW',
      },
    },
  
    SET_PASSWORD: {
      TITLE: 'Set your new password',
      PASSWORD_CHANGE_SUCCESS: 'Your password has been successfully changed',
  
      FORM: {
        PASSWORD: 'New password',
        PASSWORD_PLACEHOLDER: 'At least {{signsNum}} signs',
        PASSWORD_HINT: 'Password should contain at least one letter and one digit',
  
        REPEAT_PASSWORD: 'Repeat password',
        REPEAT_PASSWORD_PLACEHOLDER: 'Make sure it’s the same as above',
  
        RESET_PASSWORD: 'Reset password',
      },
    },
  
    SECURITY_NOTIFICATION: {
      TITLE: 'Security Notification',
      BOLD_INFO: 'You haven`t change your password for a long time.',
      INFO: 'We recommend doing it right now for security reasons',
      EMAIL_INFO: 'Please enter the email you have signed up with',
      CHANGE_PASSWORD: 'Change password',
      EMAIL_SUCCESSFULLY_SENT: 'Email sent to %{email} with detailed instructions on how to reset your password',
  
      FORM: {
        EMAIL: 'Email',
        EMAIL_PLACEHOLDER: 'Your email address',
      },
    },
  
    PERSONAL_INFO: {
      TITLE: 'Personal Info',
      DESCRIPTION: 'Keep your personal information updated! Keep in mind that we use this information in order to contact and inform you about your account at all times. Please make sure the information is accurate.',
      UPDATE_SUCCESS: 'Profile updated successfully',
  
      FORM: {
        FIRST_NAME: 'First name',
        FIRST_NAME_PLACEHOLDER: 'Your first name',
        LAST_NAME: 'Last name',
        LAST_NAME_PLACEHOLDER: 'Your last name',
        GENDER: 'Gender',
        GENDER_MALE: 'Male',
        GENDER_FEMALE: 'Female',
        DATE_OF_BIRTH: 'Date of birth',
        LANGUAGE: 'Language',
        ID_NUMBER: 'Identification Number',
        CITY: 'City',
        POSTAL_CODE: 'Postal code',
        ADDRESS: 'Address',
        COUNTRY: 'Country',
        EMAIL: 'Email',
        ALT_EMAIL: 'Alt Email',
        EMAIL_VERIFIED: 'Verified',
        PHONE: 'Phone',
        PHONE_PLACEHOLDER: 'Your phone',
        ALT_PHONE: 'Alt phone',
        ALT_PHONE_PLACEHOLDER: 'Your alternative phone',
        UPDATE_PROFILE: 'Update profile',
        MORE_INFO: 'More info',
        GDPR: {
          TITLE: 'GDPR',
          EMAIL: 'Email',
          PHONE: 'Phone',
          SOCIAL_MEDIA: 'Social Media',
          SMS: 'SMS',
        },
        SPAM: {
          TITLE: 'SPAM',
          MARKET_NEWS: 'Market News',
          INFORMATION: 'Information',
          EDUCATIONAL: 'Educational',
          PROMOS_OFFERS: 'Promos & offers',
          STATISTICS_SUMMARY: 'Statistics & Summary',
        },
        WEB_COOKIES: {
          TITLE: 'Web Cookies',
          ACCEPT: 'Do you allow cookies?',
        },
        COUNTRY_SPECIFIC_IDENTIFIER: 'County specific identifier',
        COUNTRY_SPECIFIC_IDENTIFIER_TYPE: 'County specific identifier type',
        COUNTRY_SPECIFIC_IDENTIFIER_TYPES: {
          TEN_DSS_DIGIT_INVESTOR_SHARE: '10 DSS digit investor share',
          ELEVEN_DIGIT_PERSONAL_ID: '11 digit personal id',
          BELGIAN_NATIONAL_NUMBER: 'Belgian National Number',
          BULGARIAN_PERSONAL_NUMBER: 'Bulgarian Personal Number',
          CONCAT: 'CONCAT',
          ESTONIAN_PERSONAL_IDENTIFICATION_CODE: 'Estonian Personal Identification Code',
          FISCAL_CODE: 'Fiscal code',
          NATIONAL_IDENTIFICATION_NUMBER: 'National identification number',
          NATIONAL_IDENTIFICATION_NUMBER_COD_NUMERIC_PERSONAL: 'National Identification Number (Cod Numeric Personal)',
          NATIONAL_IDENTIFICATION_NUMBER_PESEL: 'National Identification Number (PESEL)',
          NATIONAL_PASSPORT_NUMBER: 'National Passport Number',
          PERSONAL_CODE_ASMENS_KODAS: 'Personal code (Asmens kodas)',
          PERSONAL_CODE_PERSONAS_KODS: 'Personal code (Personas kods)',
          PERSONAL_IDENTIFICATION_NUMBER: 'Personal Identification Number',
          PERSONAL_IDENTITY_CODE: 'Personal identity code',
          PERSONAL_IDENTITY_CODE_TEN_DIGITS_ALPHANUMERICAL_DDMMYYXXXX: 'Personal identity code - 10 digits alphanumerical: DDMMYYXXXX        ',
          PERSONAL_IDENTITY_CODE_KENNITALA_ICELAND: 'Personal Identity Code (Kennitala / Iceland)',
          PERSONAL_IDENTITY_NUMBER: 'Personal identity number',
          PERSONAL_NUMBER: 'Personal number',
          TAX_IDENTIFICATION_NUMBER: 'Tax identification number',
          TAX_NUMBER: 'Tax number',
          UK_NATIONAL_INSURANCE_NUMBER: 'UK National Insurance number',
        },
        UPDATE_DETAILS_TOOLTIP: {
          TEXT: 'You can update your details by sending all relevant information and accompanying documents to {{receiver}}',
          DEFAULT_RECEIVER: 'your Agent',
        },
      },
    },
  
    CHANGE_PASSWORD: {
      TITLE: 'Change password',
      DESCRIPTION: 'Your privacy is a big issue for us, we do everything we can to keep your information private. For your own safety and privacy, we recommend you update your password every three months. Keep it private and confidential, do not share it with anyone including personnel. Remember that this will change your password to the client area and all your trading accounts as well.',
      SUCCESS_MESSAGE: 'Password changed successfully. You would have to login once again.',
  
      FORM: {
        CURRENT_PASSWORD: 'Current password',
        NEW_PASSWORD: 'New password',
        NEW_PASSWORD_HINT: 'Password should contain at least one letter and one digit',
        REPEAT_NEW_PASSWORD: 'Repeat password',
        REPEAT_NEW_PASSWORD_PLACEHOLDER: 'Repeat new password',
      },
    },
  
    TRADING_ACCOUNTS: {
      TITLE: 'Trading Accounts',
      ADD_NEW_ACCOUNT: '+ New Account',
      CHANGE_PASSWORD: 'Change password',
      CHANGE_LEVERAGE: 'Request to change leverage',
      HISTORY_LEVERAGE: 'History change leverage',
      TRADING_ACCOUNT: 'Trading account',
      TYPE: 'Type',
      BALANCE: 'Balance',
      LOGIN: 'Login',
      CREDIT: 'Credit',
      LEVERAGE: {
        TITLE: 'Leverage',
        FROM: 'from',
        TO: 'to',
        SINCE: 'since',
        CANCEL_NOTIFICATION_SUCCESS: 'Cancellation of change leverage request was successfully',
        CANCEL_NOTIFICATION_FAILED: 'Cancellation of change leverage request was failed',
      },
      SERVER: 'Server',
      ACCOUNT_CREATED: 'Account successfully created',
      NO_TRADING_ACC: 'No trading accounts',
      NO_CREATE_ACC: 'You are not allowed to create a trading account, unless you pass the Assessment of Appropriateness and your KYC documents are approved.',
      TRADING_ACCOUNT_LIMIT: 'If you are willing to open additional account please contact {{supportEmail}} and provide the reason for new additional account to be created.',
    },
  
    TRADING_HISTORY: {
      TITLE: 'Trading history',
      TRADE: 'Trade',
      TYPE: 'Type',
      OPEN_TIME: 'Open time',
      CLOSE_TIME: 'Close time',
      SYMBOL: 'Symbol',
      VOLUME: 'Volume',
      OPEN_PRICE: 'Open price',
      CLOSE_PRICE: 'Close price',
      COMMISSION: 'Commission',
      SWAP: 'Swap',
      PROFIT: 'Profit',
      TYPES: {
        OP_BUY: 'Buy',
        OP_SELL: 'Sell',
        OP_BUY_LIMIT: 'Buy limit',
        OP_SELL_LIMIT: 'Sell limit',
        OP_BUY_STOP: 'Buy stop',
        OP_SELL_STOP: 'Sell stop',
        OP_BUY_MARKET: 'Buy market',
        OP_SELL_MARKET: 'Sell market',
        OP_BUY_STOP_LIMIT: 'Buy stop limit',
        OP_SELL_STOP_LIMIT: 'Sell stop limit',
        OP_BALANCE: 'Balance',
        OP_CREDIT: 'Credit',
      },
      FILTERS: {
        TRADING_ACCOUNT: 'Trading Account',
        TRADE_STATUS: 'Trade status',
        OPEN: 'Open',
        CLOSED: 'Closed',
        OPEN_TIME_RANGE: 'Open time range',
        CLOSE_TIME_RANGE: 'Close time range',
        PENDING: 'Pending',
      },
    },
  
    DOCUMENTS: {
      TITLE: 'Verification Documentation',
      DESCRIPTION_UNREGULATED: '<p>Please provide us with the requested documents.</p><p>To fully verify your account and activate it, you will be required to provide us with colored photos/scans of the following documents, making sure that each document is completely and clearly visible, including its edges. Black and White copies and/or copies in which the documents\' edges are not visible WILL NOT be accepted.</p><p>Please be aware that KYC documents are collected from the owner of the trading account - the depositor, therefore all documents shall match the details of the owner of the bank account or credit card from which the deposits are done.</p><h3>1. Proof of Identity</h3><p>Please, upload a colored copy of any of the following document clearly showing the four corners, ID number and full name. In addition, it must show a valid date of expiration</p><ul><li>Passport</li><li>National ID</li></ul><h3>2. Proof of Residency</h3><p>An official document dated within the last 3 months, issued in your name, showing your full address, with the logo of the issuer. As a Proof of Residency, you can upload:</p><ul><li>Utility bills (Electricity bills, water supply bills, landline phone bills, or gas bills, mobile and internet bills)</li><li>Residence certificate issued by a governmental authority</li><li>Bank statements (statement about issuing a new CC or opening a new bank account or any other action performed with customer\'s account given that this document is not older than 3 months)</li><li>Tax certificate</li></ul><h3>3. Proof of Payment</h3><p>Copy of the Payment Card used for depositing:</p><p><strong>Front:</strong></p><ul><li>Showing your full name</li><li>With a valid expiration date</li><li>Showing the first 6 digits and last 4 digits of the card (hide the other digits)</li></ul><p><strong>Back:</strong></p><ul><li>The signature of the stripe</li><li>Hiding the cvv code</li><li>Hide all digits of the payment card except the first 6 digits and last 4 digits</li></ul><h3>4. Declaration of the deposit  (DOD)</h3><p>Confirmation of your online transaction</p>',
      KYC_VERIFICATION_TITLE: 'Documents & KYC verification',
    },
  
    FILE_DROPZONE_UPLOAD_SMALL: {
      ATTACH: "Drop file to attach or",
      BROWSE: "browse.",
      MAX_FILE_SIZE: "MAX file size",
    },
  
    DASHBOARD: {
      TITLE: 'Dashboard',
    },
  
    FINANCE: {
      TITLE: 'Finance',
      TO_TRADING_ACCOUNT: 'To trading account',
      FROM_TRADING_ACCOUNT: 'From trading account',
      NO_MATCH: 'No matching accounts',
    },
  
    VERIFY_PROFILE: {
      SUCCESSFULLY_VERIFIED: 'Email successfully verified',
      VERIFICATION_FAILED: 'Email verification failed',
    },
  
    REFERRAL_PROGRAM: {
      TITLE: 'Referral Program',
      YOUR_PERSONAL_LINK: 'Your Personal Link',
      YOUR_REFERRAL_LINK_COPIED: 'Your referral link is copied to clipboard!',
      REMUNERATION_ACCOUNT_SAVED: 'Trading account for remuneration successfully saved',
  
      FORM: {
        CHOOSE_ACCOUNT: 'Choose',
        TRADING_ACCOUNT: 'Trading account',
      },
  
      INTRODUCED_REFERRALS: 'Introduced Referrals',
      NO_REFERRALS: 'No referrals',
  
      REFERRAL_NAME: 'Referral Name',
      REFERRAL_STATUS: 'Referral Status',
      REFERRAL_STATUSES: {
        VERIFIED: 'VERIFIED',
        NOT_VERIFIED: 'NOT VERIFIED'
      },
      BONUS_TYPE: 'Bonus Type',
      BONUS_TYPES: {
        REGISTRATION: 'Registration',
        FTD: 'FTD'
      },
      REGISTRATION_DATE: 'Registration Date',
      FTD_AMOUNT: 'FTD Amount',
      FTD_DATE: 'FTD Date',
      REMUNERATION: 'Remuneration',
      REMUNERATION_DATE: 'Remuneration Date',
    },
  
    WEBTRADER: {
      TITLE: 'WebTrader',
      START_WEBTRADER: 'Web Trader',
    },
  
    NOT_FOUND: {
      TITLE: '404 - PAGE NOT FOUND',
      DESCRIPTION: 'The page you are looking for does not exist; it may have been moved, or removed altogether. You will redirected to home page in',
      SECONDS: 'seconds',
      GO_TO_HOME: 'Back to homepage',
    },
  
    // Backend API errors
    sign: {
      in: {
        from: {
          restricted: {
            country: 'You tried to sign in from a restricted country',
          },
        },
      },
    },
    error: {
      entity: {
        not: {
          found: 'Not found',
        },
      },
      access: {
        unauthorized: 'Wrong user/password',
      },
      user: {
        locked: {
          by: {
            operator: 'User is locked, please contact customer support',
          },
          failed: {
            sign: {
              in: {
                attempts: {
                  exceeded: 'User is locked out by 5 failed login attempts',
                },
              },
            },
          },
        },
      },
      validation: {
        password: {
          nonEquals: 'You entered a wrong password, please try again',
          repeated: 'You used this password recently. Please choose a different one.',
        },
        email: {
          exist: 'Email already exist',
          invalid: 'Invalid Email format',
        },
        birthDate: {
          age: 'Invalid age specified',
        },
        country: {
          restricted: 'You tried to sign in from a restricted country',
        },
        insufficient: {
          found: 'The Withdraw request is impossible because the requested amount exceeds your Trading Account balance',
        },
        withdraw: {
          limit: {
            exceed: 'The Withdraw request is impossible because the sum of previous request(s) amount exceeds your Trading Account balance',
          },
          free: {
            margin: {
              limit: {
                exceed: 'Requested amount exceeded the (Free Margin - Credit) - sum of previous request(s) amount',
              },
            },
          },
        },
        failed: 'Operation failed',
      },
      payment: {
        failed: 'Deposit failed',
      },
      internal: 'Something went wrong, try again later or report to support',
      badRequest: 'Bad request',
    },
    limit: {
      of: {
        reset: {
          password: {
            reached: "User's limit of reset password requests is reached"
          },
        },
      },
    },
  
    // Default i18n setup
    number: {
      currency: {
        format: {
          format: '%n %u',
          precision: 2,
        },
      },
    },
  },
  'de': {
    locale: {
      name: 'Deutsch',
    },
  
    COMMON: {
      AMOUNT: 'Betrag',
      APPLY: 'Anwenden',
      SAVE: 'Speichern',
      COPY: 'Kopieren',
      RESET_FILTERS: 'Filter zurücksetzen',
      CANCEL: 'Abbrechen',
      CLOSE: 'Schließen',
      CONFIRM: 'Bestätigen',
      DEPOSIT: 'Einzahlung',
      LOGOUT: 'Abmelden',
      BALANCE: 'Kontostand',
      SEND: 'Senden',
      CONTINUE: 'Weiter',
      SEND_REQUEST: 'Anfrage senden',
      BACK: 'Zurück',
      FILL_IN_NOW: 'Jetzt ausfüllen',
      CHECKOUT_NOW: 'Jetzt Aktion fertigstellen',
      TRANSFER_FUNDS: 'Geldmittel überweisen',
      WITHDRAW: 'Auszahlen',
      DATE_ON: 'bei {{date}}',
      ID: 'Ausweis',
      FOR: 'für',
      SELECT: 'Auswählen',
      NO_ITEMS: 'Keine Objekte',
      PAYMENT_STATUS: {
        PENDING: 'Offen',
        COMPLETED: 'Fertiggestellt',
        REJECTED: 'Abgelehnt',
        FAILED: 'Fehlgeschlagen',
        CANCELED: 'Storniert',
      },
      PAYMENT_TYPE: {
        DEPOSIT: 'Einzahlung',
        WITHDRAW: 'Auszahlen',
        CONFISCATE: 'Konfiszieren',
        TRANSFER_IN: 'Überweisung in',
        TRANSFER_OUT: 'Überweisung aus',
        CREDIT_IN: 'Guthaben in',
        CREDIT_OUT: 'Guthaben aus',
        FEE: 'Gebühr',
        INTEREST_RATE: 'Interest rate',
        DEMO_DEPOSIT: 'Einzahlung',
      },
      TRADING_ACCOUNT_TYPES: {
        LIVE: 'Live',
        DEMO: 'Demo',
      },
      DATE_OPTIONS: {
        START_DATE: 'Von',
        END_DATE: 'Zu',
      },
      SELECT_OPTION: {
        NO_ITEMS: '-- Keine Objekte --',
      },
      ARCHIVED: 'Archiviert',
    },
  
    MODALS: {
      DOCUMENTS_UPLOAD_MODAL: {
        TITLE: 'Dokumente hochladen',
        UPLOADING_DOCUMENTS: 'Dokumente werden hochgeladen',
        INFO: 'Stellen Sie sicher, dass die Bilder Ihrer Dokumente scharf sind und der Text klar lesbar ist. Die maximale Dateigröße beträgt 10 MB und die Formate PNG und JPG werden unterstützt.',
        DOCUMENTS: 'Dokumente',
        UPLOADED: 'Hochgeladen',
        SUCCESS_UPLOAD_MESSAGE: 'Alle Dokumente wurden erfolgreich hochgeladen',
  
        FORM: {
          DOCUMENT_TYPE: 'Dokumentenart',
          SELECT_DOCUMENT_TYPE: 'Dokumentenart auswählen',
          DOCUMENT_TYPES: {
            'licence-front': 'Führerschein - Vorderseite',
            'licence-back': 'Führerschein - Rückseite',
            'id-front': 'ID-Karte - Vorderseite',
            'id-back': 'ID-Karte - Rückseite',
            other: 'Andere',
          },
        },
      },
      DEPOSIT_MODAL: {
        TITLE: {
          CASHIER: 'Kasse',
          FAIL: 'Kasse – Zahlung fehlgeschlagen',
          CANCEL: 'Kasse – Zahlung abgebrochen',
          SUCCESS: 'Kasse – Zahlung erfolgreich',
        },
        DEPOSIT_TO_ACCOUNT: 'Einzahlung auf Ihr Handelskonto',
        DEPOSIT_INFO: 'Zahlen Sie einfach auf eines Ihrer Handelskonten ein, indem Sie es aus der Liste auswählen, sich für eine Zahlungsmethode entscheiden und Ihren gewünschten Einzahlungsbetrag eingeben.',
        PAYMENTS_SECURED_BY: 'Zahlung gesichert durch:',
        NEW_DEPOSIT: 'Neue Einzahlung',
        FAIL: 'Leider ist Ihre Zahlung fehlgeschlagen. Versuchen Sie es bitte erneut oder verwenden Sie eine andere Zahlungsmethode.',
        CANCEL: 'Ihre Zahlung wurde abgebrochen.',
        SUCCESS: 'Glückwunsch!<br/>Ihre Zahlung war erfolgreich.',
        FORM: {
          SELECT_TRADING_ACCOUNT: 'Handelskonto auswählen',
          CHOOSE_PAYMENT_METHOD: 'Wählen Sie eine Zahlungsmethode.',
        },
      },
      TRANSFER_MODAL: {
        TITLE: 'Kasse',
        TRANSFER_FUNDS_SUCCESS: 'Geldmittel erfolgreich überwiesen!',
        TRANSFER_BETWEEN_ACCOUNTS: 'Überweisung von Geldmitteln zwischen Ihren Handelskonten.',
        TRANSFER_INFO: 'Überwiesene Geldmittel werden sofort umgerechnet und Ihrem Handelskonto gutgeschrieben.',
        PAYMENTS_SECURED_BY: 'Zahlung gesichert durch:',
        TRANSFER_FUNDS: 'Geldmittel überweisen',
        NOTE: 'Beachten Sie: Der Überweisungsbetrag wird abhängig vom Umrechnungskurs auf dem MT4-Server umgerechnet.',
        EXCHANGE_RATE: 'Exchange rate applies',
  
        FORM: {
          TO_TRADING_ACCOUNT: 'Auf das Handelskonto',
          FROM_TRADING_ACCOUNT: 'Vom Handelskonto',
        },
      },
      WITHDRAW_MODAL: {
        TITLE: 'Kasse',
        WITHDRAW_FROM_ACCOUNT: 'Vom Handelskonto abheben',
        WITHDRAW_INFO: 'Stellen Sie eine Auszahlungsanfrage von einem Ihrer Handelskonten, indem Sie ein Konto aus der Liste auswählen, sich für ein Zahlungskonto entscheiden und Ihren gewünschten Auszahlungsbetrag eingeben.',
        PAYMENTS_SECURED_BY: 'Zahlung gesichert durch:',
        WITHDRAW_REQUEST: 'Auszahlungsanfrage',
        NOTE: 'Beachten Sie: Alle Auszahlungsanfragen werden innerhalb von 24 Stunden von unserem Personal überprüft.',
        WITHDRAW_MODAL_SUCCESS: 'Auszahlungsantrag erfolgreich gesendet',
  
        FORM: {
          FROM_TRADING_ACCOUNT: 'Vom Handelskonto',
        },
      },
      UPDATE_VERSION_MODAL: {
        TITLE: 'Aktualisieren Sie Ihre Kundenportalversion.',
        TEXT: 'Das Kundenportal wurde aktualisiert. Um damit weiterzuarbeiten, klicken Sie auf die Schaltfläche weiter unten. Dadurch wird die Seite neu geladen und Ihre Version aktualisiert.',
        UPDATE_NOW: 'Jetzt aktualisieren',
      },
      DOWNLOAD_APP_MODAL: {
        TITLE: 'Anwendung herunterladen',
        MT4_TRADING_PLATFORM: 'MT4-Handelsplattform',
        TEXT: 'Die preisgekrönte MT4-Handelsplattform bietet fortschrittliche Funktionen, die dazu beigetragen haben, dass MetaTrader die beliebteste Devisenhandelsplattform auf der Welt wurde.',
        MORE_INFO: 'Weitere Informationen in unserer',
        KNOWLEDGE_BASE: ' Wissensdatenbank',
        INSTALL_APP_TITLE: 'Um mit dem Trading beginnen zu können, müssen Sie die Anwendung installieren.',
        DOWNLOAD_FREE_APP: 'Laden Sie die kostenlose MT4-App herunter.',
        OTHER_APPS: 'Anwendungen für andere Betriebssysteme:',
        OS: {
          ANDROID: 'Android',
          IOS: 'IOS',
          WINDOWS: 'Windows',
          MACOS: 'MacOS',
        },
      },
      NEW_TRADING_ACCOUNT_MODAL: {
        TITLE: 'Neues Handelskonto',
        CREATING_TRADING_ACCOUNT: 'Anlegen eines Handelskontos',
        TRADING_ACCOUNT_CREATION_LIVE_DEMO: 'Für maximale Flexibilität können Sie bis zu {{maxLiveAccounts}} Live-Handelskonten und bis zu {{maxDemoAccounts}} Demokonten eröffnen.',
        TRADING_ACCOUNT_CREATION_LIVE: 'Für maximale Flexibilität können Sie bis zu {{maxLiveAccounts}} Live-Handelskonten eröffnen.',
        ACCOUNTS_DETAILS: 'Kontoinformationen',
        ACCOUNT_CREATED: 'Konto erfolgreich erstellt.',
  
        FORM: {
          ACCOUNT_TYPE: 'Account Type',
          ACCOUNT_NAME: 'Kontoname',
          ACCOUNT_NAME_PLACEHOLDER: 'Benennen Sie Ihr neues Konto',
          CURRENCY: 'Währung',
          PASSWORD: 'Handelskonto-Passwort',
          PASSWORD_PLACEHOLDER: 'Passwort für Handelskonto erstellen',
          PASSWORD_HINT: 'Mindestens acht Symbole, davon eines klein, eines groß und eine Zahl',
          CREATE_ACCOUNT: 'Konto anlegen',
          PLATFORM_TYPE: 'Platform type',
        },
      },
      CHANGE_TRADING_ACCOUNT_PASSWORD_MODAL: {
        TITLE: 'Passwort für Handelskonto ändern',
        CHANGE_PASSWORD_FOR: 'Passwort ändern für - {{account}}',
        PASSWORD_CHANGED: 'Die Passwortänderung ist erfolgt.',
  
        FORM: {
          PASSWORD: 'Neues Passwort',
          PASSWORD_HINT: 'Mindestens acht Symbole, davon eines klein, eines groß und eine Zahl',
          REPEAT_PASSWORD: 'Passwort wiederholen',
          REPEAT_PASSWORD_PLACEHOLDER: 'Neues Passwort wiederholen',
          CHANGE_PASSWORD: 'Passwort ändern',
        },
      },
      CHANGE_LEVERAGE_MODAL: {
        TITLE: 'Antrag auf Änderung der Hebelwirkung',
        LEVERAGE_CHANGED: 'Antrag auf Änderung der Hebelwirkung erfolgreich gesendet',
        FORBIDDEN_CHANGE_LEVERAGE: 'You\'ve already made a \'Change leverage\' request which is in \'PENDING\' status. You can not create any more requests until this status changes',
  
        FORM: {
          CHANGE_LEVERAGE: 'Antrag auf Änderung der Hebelwirkung',
          MESSAGE: 'Bitte wählen Sie Ihren bevorzugten Hebel und die Anfrage wird zur Überprüfung an unsere Backoffice-Abteilung gesendet.<br><br>Bitte beachten Sie, dass sich Änderungen des Hebels auf offene Positionen auswirken. Eine Senkung des Hebels kann zu einem Margenabschluss führen.',
        },
      },
      HISTORY_LEVERAGE_MODAL: {
        TITLE: 'leverage History',
        LEVERAGE: 'LEVERAGE',
        STATUS: 'STATUS',
        CHANGE_DATE: 'CHANGE DATE',
        HISTORY_LEVERAGE_NOT_FOUND: 'Not found change leverage history',
      },
      SECOND_STEP_REGISTRATION: {
        TITLE: 'Zweiter Schritt Registrierung',
        FILL_ALL_FIELDS: 'Alle Felder muss ausgefült sein',
        COMPLETE_PERSONAL_PROFILE: 'Ergänzen Sie Ihr personliche Profil',
        TEXT: 'Diese Informationen werden von den Finanzvorschriften gefordert und helfen uns, Sie und Ihr Geld zu schützen. Dies erfordert nicht mehr als 5 Minuten Ihrer Zeit.',
        PAYMENTS_SECURED_BY: 'Zahlung gesichert durch:',
        FORM: {
          FIRST_NAME: 'Vorname',
          FIRST_NAME_PLACEHOLDER: 'Ihr Vorname',
          LAST_NAME: 'Nachname',
          LAST_NAME_PLACEHOLDER: 'Ihr Nachname',
          DATE_OF_BIRTH: 'Geburtsdatum',
          CITY: 'Stadt',
          POSTAL_CODE: 'Postleitzahl',
          ADDRESS: 'Adresse',
          COUNTRY: 'Land',
          PASSWORD: 'Handelskonto-Passwort',
          PASSWORD_PLACEHOLDER: 'Passwort für Handelskonto erstellen',
          PASSWORD_HINT: 'Mindestens acht Symbole, davon eines klein, eines groß und eine Zahl',
          REPEAT_PASSWORD: 'Passwort wiederholen',
          REPEAT_PASSWORD_PLACEHOLDER: 'Stellen Sie sicher, dass es mit dem obigen übereinstimmt',
        },
      },
      CANCEL_TRANSACTION_MODAL: {
        TITLE: 'Auszahlungsauftrag stornieren',
        TEXT: 'Möchten Sie den Auszahlungsauftrag stornieren?',
        CANCEL_TRANSACTION_SUCCESS: 'Transaktion erfolgreich storniert.',
      },
      CONFIRM_CALLBACK_REQUEST: {
        TITLE: 'Bestätigung der Rückrufanfrage',
        TEXT: 'Benötigen Sie die Hilfe eines Beraters? Wir sind immer bereit zu helfen!<br>Gerne beantworten wir Ihre Fragen, Ihr persönlicher Manager ruft Sie unbedingt innerhalb von 30 Minuten zurück.',
        NOTIFICATION: 'Der Berater wird Ihnen gleich kontaktieren',
        ALREADY_SENT_TEXT: 'Sie haben schon eine Bitte um Rückruf verschickt.<br>Ihr persönlicher Manager ruft Sie innerhalb der nächsten 30 Minuten zurück.',
      },
    },
  
    TRANSACTIONS_HISTORY: {
      TITLE: 'Transaktionsverlauf',
      TRADING_ACC: 'Handelskonto',
      PAYMENT_METHOD: 'Zahlungsmethode',
      TRANSACTION: 'Transaktion',
      TYPE: 'Typ',
      AMOUNT: 'Betrag',
      DATE_AND_TIME: 'Datum und Zeit',
      STATUS: 'Status',
      NO_TRANSACTIONS: 'Keine Transaktionen verfügbar.',
    },
  
    SIDEBAR_MENU: {
      DASHBOARD: 'Dashboard',
      FINANCE: 'Finanzen',
      TRADING: 'Handel',
      ACCOUNTS: 'Konten',
      HISTORY: 'Verlauf',
      DOCUMENTS: 'Dokumente',
      REFERRAL_PROGRAM: 'Empfehlungsprogramm',
      MY_PROFILE: 'Mein Profil',
      PERSONAL_INFO: 'Persönliche Informationen',
      CHANGE_PASSWORD: 'Passwort ändern',
      DOWNLOAD_MT4: 'Download MT4',
      TERMS_AND_CONDITIONS: 'Geschäftsbedingungen',
    },
  
    SIDEBAR_INFO: {
      HELLO: 'Hallo',
    },
  
    FILE_DROPZONE_UPLOAD: {
      DRAG_AND_DROP: 'Dateien hierhin ziehen und ablegen',
      BROWSE_FILES: 'Dateien durchsuchen',
      WARNING: 'Bitte beachten Sie:<br>Unterstützte Formate sind .pdf .jpeg .jpg .png .doc .docx .odt.<br>Die maximale Größe einer einzelnen Datei beträgt 16 Mb.<br>Die maximale Größe eines Dateistapels beträgt 100 Mb.',
      ERRORS: {
        INVALID_SIZE: 'Die Dateigröße sollte 16 Mb nicht überschreiten.',
        INVALID_TYPE: 'Falsches Dateiformat.',
        INVALID_TOTAL_SIZE: 'Die Gesamtgröße der hochgeladenen Dateien sollte 100 Mb nicht überschreiten.',
        COMMON: 'Einige der hochgeladenen Dateien haben ein ungültiges Format oder eine ungültige Größe. Bitte beheben Sie dies und versuchen Sie erneut, sie hochzuladen.'
      },
    },
  
    ERROR_BOUNDARY: {
      TITLE: 'Fehler',
      DESCRIPTION: 'Etwas ist schief gelaufen',
      TRY_RELOAD_PAGE: 'Versuchen Sie, die Seite neu zu laden',
      RELOAD_PAGE: 'Seite neuladen',
    },
  
    FOOTER: {
      COPYRIGHTS: '© {{year}} {{brand}}, Inc. Alle Rechte vorbehalten.',
    },
  
    NO_FOUND_TRADING_ACCOUNTS_OPTION: {
      NO_ACCOUNTS: 'Keine Handelskonten verfügbar',
      CREATE_ACCOUNT: 'Konto anlegen',
    },
  
    SIGN_IN: {
      TITLE: 'ANMELDEN',
      DONT_HAVE_ACCOUNT: 'Sie haben noch kein Konto?',
      SIGN_UP_NOW: 'Jetzt anmelden',
      FORGOT_PASSWORD: 'Passwort vergessen?',
  
      FORM: {
        EMAIL: 'E-Mail',
        EMAIL_PLACEHOLDER: 'Ihre E-Mail-Adresse',
        PASSWORD: 'Passwort',
        PASSWORD_PLACEHOLDER: 'Mindestens {{signsNum}} Zeichen',
        LOGIN: 'ANMELDUNG',
      },
    },
  
    SIGN_UP: {
      TITLE: 'REGISTRIEREN',
      ZERO_COMMISSIONS: 'NULL KOMMISSIONEN',
      INFO: '– Handeln Sie günstiger<br/>– Keine Kommissionen<br/>– Wettbewerbsfähige Spreads<br/>– Schnelle Ausführung<br/>',
      NOTE: 'Beachten Sie: Der Handel mit birgt ein hohes Verlustrisiko.',
      ALREADY_REGISTERED: 'Bereits registriert?',
      SIGN_IN_HERE: 'Melden Sie sich hier an.',
  
      FORM: {
        FIRST_NAME: 'Vorname',
        FIRST_NAME_PLACEHOLDER: 'Ihr Vorname',
        LAST_NAME: 'Nachname',
        LAST_NAME_PLACEHOLDER: 'Ihr Nachname',
        EMAIL: 'E-Mail',
        EMAIL_PLACEHOLDER: 'Ihre E-Mail-Adresse',
        PASSWORD: 'Passwort',
        PASSWORD_PLACEHOLDER: 'Mindestens {{signsNum}} Zeichen',
        PASSWORD_HINT: 'Das Passwort sollte mindestens einen Buchstaben und eine Ziffer enthalten',
        COUNTRY: 'Land',
        PHONE: 'Telefonnummer',
        PHONE_PLACEHOLDER: 'Ihre Telefonnummer',
        NOT_USA_CITIZEN: 'Ich bin kein US-Staatsbürger.',
        TERMS_AND_CONDITIONS: 'Geschäftsbedingungen',
        ACCEPT_TERMS: 'Ich habe die {{termsAndConditions}} der Kundenvereinbarung, der Unternehmensrichtlinien, der Datenschutzrichtlinie sowie der Risikoaufklärung und -hinweise gelesen und akzeptiert. Ich erkenne zudem an und stimme zu, dass meine personenbezogenen Daten im Einklang mit der Datenschutzrichtlinie von {{brandId}} verarbeitet werden.',
        AGREE_OPEN_ACCOUNT: 'Ich würde gerne ein Konto bei %{brandId} eröffnen. Ich bestätige, dass ich mich freiwillig dazu entschieden habe, mich an %{brandId} zu wenden. Des Weiteren stimme ich zu, von Vertretern des Unternehmens telefonisch oder per E-Mail kontaktiert zu wenden.',
        TERM_STATEMENT: 'AGB',
        ALLOWED_AGE: 'Ich bin über 18 Jahre alt.'
      },
    },
  
    RESET_PASSWORD: {
      TITLE: 'Passwort zurücksetzen',
      REMEMBER_PASSWORD: 'Erinnern Sie sich an Ihr Passwort?',
      SIGN_IN: 'Anmelden',
      ENTER_EMAIL: 'Bitte geben Sie die E-Mail-Adresse ein, mit der Sie sich registriert haben.',
  
      FORM: {
        EMAIL: 'E-Mail',
        EMAIL_PLACEHOLDER: 'Ihre E-Mail-Adresse',
      },
  
      SUCCESS: {
        CHECK_INBOX: 'Sehen Sie in Ihrem Posteingang nach.',
        EMAIL_SENT_TO: 'Wir haben eine E-Mail an',
        WITH_INSTRUCTIONS: 'gesendet in der Sie eine detaillierte Anleitung dazu erhalten, wie Sie Ihr Passwort zurücksetzen können.',
        CHECK_SPAM: 'Vergessen Sie nicht, Ihren Spam-Ordner zu überprüfen, sollten Sie die E-Mail nicht erhalten haben.',
        LOGIN_NOW: 'JETZT ANMELDEN',
      },
    },
  
    SET_PASSWORD: {
      TITLE: 'Geben Sie Ihr neues Passwort ein.',
      PASSWORD_CHANGE_SUCCESS: 'Ihre Passwortänderung ist erfolgt.',
  
      FORM: {
        PASSWORD: 'Neues Passwort',
        PASSWORD_PLACEHOLDER: 'Mindestens {{signsNum}} Zeichen',
        PASSWORD_HINT: 'Das Passwort sollte mindestens einen Buchstaben und eine Ziffer enthalten',
  
        REPEAT_PASSWORD: 'Passwort wiederholen',
        REPEAT_PASSWORD_PLACEHOLDER: 'Stellen Sie sicher, dass es mit dem obigen übereinstimmt',
  
        RESET_PASSWORD: 'Passwort zurücksetzen',
      },
    },
  
    SECURITY_NOTIFICATION: {
      TITLE: 'Security Notification',
      BOLD_INFO: 'You haven`t change your password for a long time.',
      INFO: 'We recommend doing it right now for security reasons',
      EMAIL_INFO: 'Please enter the email you have signed up with',
      CHANGE_PASSWORD: 'Change password',
      EMAIL_SUCCESSFULLY_SENT: 'Email sent to %{email} with detailed instructions on how to reset your password',
  
      FORM: {
        EMAIL: 'Email',
        EMAIL_PLACEHOLDER: 'Your email address',
      },
    },
  
    PERSONAL_INFO: {
      TITLE: 'Persönliche Informationen',
      DESCRIPTION: 'Halten Sie Ihre persönlichen Informationen auf dem neuesten Stand! Beachten Sie, dass wir diese Informationen verwenden, um Sie jederzeit über Ihr Konto zu kontaktieren. Bitte stellen Sie sicher, dass die Informationen korrekt sind.',
      UPDATE_SUCCESS: 'Profilaktualisierung erfolgreich',
  
      FORM: {
        FIRST_NAME: 'Vorname',
        FIRST_NAME_PLACEHOLDER: 'Ihr Vorname',
        LAST_NAME: 'Nachname',
        LAST_NAME_PLACEHOLDER: 'Ihr Nachname',
        GENDER: 'Geschlecht',
        GENDER_MALE: 'Männlich',
        GENDER_FEMALE: 'Weiblich',
        DATE_OF_BIRTH: 'Geburtsdatum',
        LANGUAGE: 'Sprache',
        ID_NUMBER: 'Identifikationsnummer',
        CITY: 'Stadt',
        POSTAL_CODE: 'Postleitzahl',
        ADDRESS: 'Adresse',
        COUNTRY: 'Land',
        EMAIL: 'E-Mail',
        ALT_EMAIL: 'Alternative E-Mail',
        EMAIL_VERIFIED: 'Verifiziert',
        PHONE: 'Telefonnummer',
        PHONE_PLACEHOLDER: 'Ihre Telefonnummer',
        ALT_PHONE: 'Alternative Telefonnummer',
        ALT_PHONE_PLACEHOLDER: 'Ihre alternative Telefonnummer',
        UPDATE_PROFILE: 'Profil aktualisieren',
        MORE_INFO: 'Mehr Infos',
        GDPR: {
          TITLE: 'DSGVO',
          EMAIL: 'E-Mail',
          PHONE: 'Telefonnummer',
          SOCIAL_MEDIA: 'Soziale Medien',
          SMS: 'SMS',
        },
        SPAM: {
          TITLE: 'SPAM',
          MARKET_NEWS: 'Marktnachrichten',
          INFORMATION: 'Information',
          EDUCATIONAL: 'Bildung',
          PROMOS_OFFERS: 'Aktionen & Angebote',
          STATISTICS_SUMMARY: 'Statistiken & Überblick',
        },
        WEB_COOKIES: {
          TITLE: 'Web-Cookies',
          ACCEPT: 'Erlauben Sie Cookies?',
        },
        COUNTRY_SPECIFIC_IDENTIFIER: 'Landesspezifische Identifikationsnummer',
        COUNTRY_SPECIFIC_IDENTIFIER_TYPE: 'Art der landesspezifischen Identifikationsnummer',
        COUNTRY_SPECIFIC_IDENTIFIER_TYPES: {
          TEN_DSS_DIGIT_INVESTOR_SHARE: '10-stellige Investorenanteilsnummer des DSS',
          ELEVEN_DIGIT_PERSONAL_ID: '11-stellige persönliche Kennung',
          BELGIAN_NATIONAL_NUMBER: 'Nationalregisternummer in Belgien',
          BULGARIAN_PERSONAL_NUMBER: 'Bulgarische persönliche Identifikationsnummer',
          CONCAT: 'CONCAT',
          ESTONIAN_PERSONAL_IDENTIFICATION_CODE: 'Persönlicher Identifikationscode in Estland',
          FISCAL_CODE: 'Steuernummer',
          NATIONAL_IDENTIFICATION_NUMBER: 'Nationale Identifikationsnummer',
          NATIONAL_IDENTIFICATION_NUMBER_COD_NUMERIC_PERSONAL: 'Nationale Identifikationsnummer (Cod Numeric Personal)',
          NATIONAL_IDENTIFICATION_NUMBER_PESEL: 'Nationale Identifikationsnummer (PESEL)',
          NATIONAL_PASSPORT_NUMBER: 'Nationale Reisepass-Nummer',
          PERSONAL_CODE_ASMENS_KODAS: 'Persönlicher Identifikationscode (Asmens kodas)',
          PERSONAL_CODE_PERSONAS_KODS: 'Persönlicher Identifikationscode (Personas kods)',
          PERSONAL_IDENTIFICATION_NUMBER: 'Persönliche Identifikationsnummer',
          PERSONAL_IDENTITY_CODE: 'Persönlicher Identitätscode',
          PERSONAL_IDENTITY_CODE_TEN_DIGITS_ALPHANUMERICAL_DDMMYYXXXX: 'Persönlicher Identitätscode – 10-stellig, alphanumerisch: TTMMJJXXXX ',
          PERSONAL_IDENTITY_CODE_KENNITALA_ICELAND: 'Persönlicher Identitätscode (Kennitala / Island)',
          PERSONAL_IDENTITY_NUMBER: 'Persönliche Identifikationsnummer',
          PERSONAL_NUMBER: 'Persönliche Identifikationsnummer',
          TAX_IDENTIFICATION_NUMBER: 'Steueridentifikationsnummer',
          TAX_NUMBER: 'Steuernummer',
          UK_NATIONAL_INSURANCE_NUMBER: 'Staatliche Sozialversicherungsnummer für GB',
        },
        UPDATE_DETAILS_TOOLTIP: {
          TEXT: 'Sie können Ihre Angaben aktualisieren, indem Sie alle relevanten Informationen und Begleitdokumente an {{receiver}} senden.',
          DEFAULT_RECEIVER: 'Ihr Agent',
        },
      },
    },
  
    CHANGE_PASSWORD: {
      TITLE: 'Passwort ändern',
      DESCRIPTION: 'Ihre Privatsphäre ist uns wichtig. Wir ergreifen alle Maßnahmen, um Ihre Daten zu schützen. Im Sinne Ihrer eigenen Sicherheit und dem Schutz Ihrer Daten empfehlen wir Ihnen, Ihr Passwort vierteljährlich zu ändern. Halten Sie es geheim und teilen Sie es nicht mit anderen, auch nicht mit unseren Mitarbeitern. Beachten Sie, dass hiermit Ihr Passwort für den Kundenbereich und all Ihre Handelskonten geändert wird.',
      SUCCESS_MESSAGE: 'Die Passwortänderung ist erfolgt. Sie müssen sich erneut anmelden.',
  
      FORM: {
        CURRENT_PASSWORD: 'Derzeitiges Passwort',
        NEW_PASSWORD: 'Neues Passwort',
        NEW_PASSWORD_HINT: 'Das Passwort sollte mindestens einen Buchstaben und eine Ziffer enthalten',
        REPEAT_NEW_PASSWORD: 'Passwort wiederholen',
        REPEAT_NEW_PASSWORD_PLACEHOLDER: 'Neues Passwort wiederholen',
      },
    },
  
    TRADING_ACCOUNTS: {
      TITLE: 'Handelskonten',
      ADD_NEW_ACCOUNT: '+ Neues Konto',
      CHANGE_PASSWORD: 'Passwort ändern',
      CHANGE_LEVERAGE: 'Request to change leverage',
      HISTORY_LEVERAGE: 'History change leverage',
      TRADING_ACCOUNT: 'Handelskonto',
      TYPE: 'Typ',
      BALANCE: 'Kontostand',
      LOGIN: 'Login',
      CREDIT: 'Guthaben',
      LEVERAGE: {
        TITLE: 'Leverage',
        FROM: 'from',
        TO: 'to',
        SINCE: 'since',
        CANCEL_NOTIFICATION_SUCCESS: 'Cancellation of change leverage request was successfully',
        CANCEL_NOTIFICATION_FAILED: 'Cancellation of change leverage request was failed',
      },
      SERVER: 'Server',
      ACCOUNT_CREATED: 'Konto erfolgreich erstellt',
      NO_TRADING_ACC: 'Keine Handelskonten',
      NO_CREATE_ACC: 'You are not allowed to create a trading account, unless you pass the Assessment of Appropriateness and your KYC documents are approved.',
      TRADING_ACCOUNT_LIMIT: 'Falls Sie ein weiteres Konto eröffnen wollen, schreiben Sie uns bitte eine E-Mail an {{supportEmail}} und nennen Sie den Grund für die Eröffnung des zusätzlichen Kontos.',
    },
  
    TRADING_HISTORY: {
      TITLE: 'Handelsverlauf',
      TRADE: 'Handeln',
      TYPE: 'Typ',
      OPEN_TIME: 'Eröffnungszeit',
      CLOSE_TIME: 'Schlusszeit',
      SYMBOL: 'Symbol',
      VOLUME: 'Volumen',
      OPEN_PRICE: 'Eröffnungspreis',
      CLOSE_PRICE: 'Schlusspreis',
      COMMISSION: 'Provision',
      SWAP: 'Swap',
      PROFIT: 'Gewinn',
      TYPES: {
        OP_BUY: 'Kaufen',
        OP_SELL: 'Verkaufen',
        OP_BUY_LIMIT: 'Buy-Limit',
        OP_SELL_LIMIT: 'Sell-Limit',
        OP_BUY_STOP: 'Buy-Stop',
        OP_SELL_STOP: 'Sell-Stop',
        OP_BUY_MARKET: 'Buy market',
        OP_SELL_MARKET: 'Sell market',
        OP_BUY_STOP_LIMIT: 'Buy stop limit',
        OP_SELL_STOP_LIMIT: 'Sell stop limit',
        OP_BALANCE: 'Kontostand',
        OP_CREDIT: 'Guthaben',
      },
      FILTERS: {
        TRADING_ACCOUNT: 'Handelskonto',
        TRADE_STATUS: 'Handelsstatus',
        OPEN: 'Offen',
        CLOSED: 'Geschlossen',
        OPEN_TIME_RANGE: 'Eröffnungszeitraum',
        CLOSE_TIME_RANGE: 'Schlusszeitraum',
        PENDING: 'Ausstehende',
      },
    },
  
    DOCUMENTS: {
      TITLE: 'Überprüfungsdokumentation',
      DESCRIPTION_UNREGULATED: '<p>Bitte stellen Sie uns die gewünschten Unterlagen zur Verfügung.</p><p>Um Ihr Konto vollständig zu verifizieren und zu aktivieren, müssen Sie uns farbige Fotos / Scans der folgenden Dokumente zur Verfügung stellen und sicherstellen, dass jedes Dokument einschließlich seiner Ränder vollständig und klar sichtbar ist. Schwarzweißkopien und / oder Kopien, bei denen die Ränder der Dokumente nicht sichtbar sind, werden NICHT akzeptiert.</p><p>Bitte beachten Sie, dass KYC-Dokumente vom Inhaber des Handelskontos - dem Einzahler - abgeholt werden. Daher müssen alle Dokumente mit den Angaben des Inhabers des Bankkontos oder der Kreditkarte übereinstimmen, von dem aus die Einzahlungen getätigt wurden.</p><h3>1. Identitätsnachweis</h3><p>Laden Sie bitte eine farbige Kopie eines der folgenden Dokumente hoch, in der die vier Ecken, die ID-Nummer und der vollständige Name deutlich angegeben sind. Außerdem muss ein gültiges Ablaufdatum angegeben sein</p><ul><li>Reisepass</li><li>Personalausweis</li></ul><h3>2. Nachweis des Wohnsitzes</h3><p>Ein in Ihrem Namen ausgestelltes offizielles Dokument der letzten 3 Monate mit Ihrer vollständigen Anschrift und dem Logo des Emittenten. Als Wohnsitznachweis können Sie Folgendes hochladen:</p><ul><li>Stromrechnungen (Stromrechnungen, Rechnungen für die Wasserversorgung, Rechnungen für Festnetztelefone oder Gasrechnungen, Mobilfunk- und Internetrechnungen)</li><li>Aufenthaltserlaubnis ausgestellt von einer Regierungsbehörde</li><li>Kontoauszüge (die Eröffnung eines neuen Bankkontos oder eine andere mit dem Kundenkonto durchgeführte Aktion, sofern dieses Dokument nicht älter als 3 Monate ist)</li><li>Steuerbescheinigung</li></ul><h3>3. Zahlungsnachweis</h3><p>Kopie der Zahlungskarte, die für Einzahlungen verwendet wird:</p><p><strong>Vorderseite:</strong></p><ul><li>Zeigen Sie Ihren vollständigen Namen</li><li>Mit einem gültigen Ablaufdatum</li><li>Die ersten 6 und letzten 4 Ziffern der Karte (die anderen Ziffern zudecken)</li></ul><p><strong>Zurückseite:</strong></p><ul><li>Kartenprüfnummer</li></ul>',
      KYC_VERIFICATION_TITLE: 'Dokumente & KYC-Verifizierung',
    },
  
    FILE_DROPZONE_UPLOAD_SMALL: {
      ATTAC: 'Datei hierherziehen um sie anzuhängen oder',
      BROWS: 'PC durchsuchen.',
      MAX_FILE_SIZE: 'MAX Dateigröße'
    },
  
    DASHBOARD: {
      TITLE: 'Dashboard',
    },
  
    FINANCE: {
      TITLE: 'Finanzen',
      TO_TRADING_ACCOUNT: 'Auf das Handelskonto',
      FROM_TRADING_ACCOUNT: 'Vom Handelskonto',
      NO_MATCH: 'Keine übereinstimmenden Konten',
    },
  
    VERIFY_PROFILE: {
      SUCCESSFULLY_VERIFIED: 'E-Mail erfolgreich verifiziert',
      VERIFICATION_FAILED: 'E-Mail-Verifizierung fehlgeschlagen',
    },
  
    REFERRAL_PROGRAM: {
      TITLE: 'Empfehlungsprogramm',
      YOUR_PERSONAL_LINK: 'Ihr persönlicher Link',
      YOUR_REFERRAL_LINK_COPIED: 'Ihr Empfehlungslink wurde in die Zwischenablage kopiert!',
      REMUNERATION_ACCOUNT_SAVED: 'Handelskonto für Vergütungen erfolgreich gespeichert',
  
      FORM: {
        CHOOSE_ACCOUNT: 'Auswählen',
        TRADING_ACCOUNT: 'Handelskonto',
      },
  
      INTRODUCED_REFERRALS: 'Empfehlungen des Introducers (Vermittlers)',
      NO_REFERRALS: 'Keine Empfehlungen',
  
      REFERRAL_NAME: 'Name der Empfehlung',
      REFERRAL_STATUS: 'Status der Empfehlung',
      REFERRAL_STATUSES: {
        VERIFIED: 'VERIFIZIERT',
        NOT_VERIFIED: 'NICHT VERIFIZIERT'
      },
      BONUS_TYPE: 'Broker-Typ',
      BONUS_TYPES: {
        REGISTRATION: 'Registrierung',
        FTD: 'FTD'
      },
      REGISTRATION_DATE: 'Registrierungsdatum',
      FTD_AMOUNT: 'FTD-Betrag',
      FTD_DATE: 'FTD-Datum',
      REMUNERATION: 'Vergütung',
      REMUNERATION_DATE: 'Vergütungsdatum',
    },
  
    WEBTRADER: {
      TITLE: 'WebTrader',
      START_WEBTRADER: 'Web Trader',
    },
  
    NOT_FOUND: {
      TITLE: '404 – SEITE NICHT GEFUNDEN',
      DESCRIPTION: 'Die Seite, nach der Sie suchen, existiert nicht. Möglicherweise wurde Sie verschoben oder komplett gelöscht. Sie werden zur Startseite weitergeleitet in ',
      SECONDS: 'Sekunden.',
      GO_TO_HOME: 'Zurück zur Startseite',
    },
  
    // Backend API errors
    sign: {
      in: {
        from: {
          restricted: {
            country: 'Sie haben versucht, sich von einem nicht zugelassenen Land aus anzumelden.',
          },
        },
      },
    },
    error: {
      entity: {
        not: {
          found: 'Nicht gefunden',
        },
      },
      access: {
        unauthorized: 'Falscher Benutzername / falsches Passwort',
      },
      user: {
        locked: {
          by: {
            operator: 'Der Benutzer wurde gesperrt. Kontaktieren Sie bitte den Kundendienst.',
          },
          failed: {
            sign: {
              in: {
                attempts: {
                  exceeded: 'Der Benutzer wurde nach fünf fehlgeschlagenen Anmeldeversuchen gesperrt.',
                },
              },
            },
          },
        },
      },
      validation: {
        password: {
          nonEquals: 'Sie haben ein falsches Passwort eingegeben. Versuchen Sie es erneut.',
          repeated: 'Sie haben dieses Passwort kürzlich benutzt. Bitte wählen Sie ein anderes aus.',
        },
        email: {
          exist: 'E-Mail existiert bereits.',
          invalid: 'Ungültiges E-Mail-Format',
        },
        birthDate: {
          age: 'Ungültiges Alter angegeben.',
        },
        country: {
          restricted: 'Sie haben versucht, sich von einem nicht zugelassenen Land aus anzumelden.',
        },
        insufficient: {
          found: 'Der Auszahlungsantrag ist nicht möglich, da der beantragte Betrag den Saldo Ihres Handelskontos übersteigt',
        },
        withdraw: {
          limit: {
            exceed: 'Der Auszahlungsantrag ist nicht möglich, das die Summe des/der vorherigen Antrags/Anträge den Saldo Ihres Handelskontos übersteigt',
          },
          free: {
            margin: {
              limit: {
                exceed: 'Der beantragte Betrag übersteigt die (freie Margin - Guthaben) - Summe des/der vorherigen Antrags/Anträge',
              },
            },
          },
        },
        failed: 'Aktion fehlgeschlagen.',
      },
      payment: {
        failed: 'Einzahlung fehlgeschlagen.',
      },
      internal: 'Etwas ist schiefgegangen. Versuchen Sie es bitte später erneut oder kontaktieren Sie den Kundendienst.',
      badRequest: 'Bad Request.',
    },
    limit: {
      of: {
        reset: {
          password: {
            reached: "Das Benutzerlimit für das Zurücksetzen des Passworts ist erreicht"
          },
        },
      },
    },
  },
  'el': {
    locale: {
      name: 'Greek',
    },
  
    COMMON: {
      AMOUNT: 'Ποσό',
      APPLY: 'Εφαρμογή',
      SAVE: 'Αποθήκευση',
      COPY: 'Αντιγραφή',
      RESET_FILTERS: 'Επαναφορά φίλτρων',
      CANCEL: 'Άκυρο',
      CONFIRM: 'Επιβεβαίωση',
      CLOSE: 'Κλείσιμο',
      DEPOSIT: 'Κατάθεση',
      LOGOUT: 'Αποσύνδεση',
      BALANCE: 'Υπόλοιπο',
      SEND: 'Αποστολή',
      CONTINUE: 'Συνέχεια',
      SEND_REQUEST: 'Αποστολή αιτήματος',
      BACK: 'Πίσω',
      FILL_IN_NOW: 'Συμπληρώστε τώρα',
      CHECKOUT_NOW: 'Ολοκλήρωση παραγγελίας τώρα',
      TRANSFER_FUNDS: 'Μεταφορά χρημάτων',
      WITHDRAW: 'Απόσυρση',
      DATE_ON: 'στις {{date}}',
      ID: 'Αναγνωριστικό',
      FOR: 'για',
      SELECT: 'Επιλογή',
      NO_ITEMS: 'Κανένα αντικείμενο',
      PAYMENT_STATUS: {
        PENDING: 'Εν αναμονή',
        COMPLETED: 'Ολοκληρώθηκε',
        REJECTED: 'Απορρίφθηκε',
        FAILED: 'Απέτυχε',
        CANCELED: 'Ακυρώθηκε',
      },
      PAYMENT_TYPE: {
        DEPOSIT: 'Κατάθεση',
        WITHDRAW: 'Απόσυρση',
        CONFISCATE: 'Κατάσχεση',
        TRANSFER_IN: 'Μεταφορά σε',
        TRANSFER_OUT: 'Transfer Out',
        CREDIT_IN: 'Credit in',
        CREDIT_OUT: 'Μεταφορά έξω',
        FEE: 'Χρέωση',
        INACTIVITY_FEE: 'Χρέωση αδράνειας',
        INTEREST_RATE: 'Επιτόκιο',
        DEMO_DEPOSIT: 'Κατάθεση',
      },
      TRADING_ACCOUNT_TYPES: {
        LIVE: 'Ζωντανό',
        DEMO: 'Δοκιμαστικό',
      },
      DATE_OPTIONS: {
        START_DATE: 'Από',
        END_DATE: 'Προς',
      },
      SELECT_OPTION: {
        NO_ITEMS: '-- Κανένα αντικείμενο --',
      },
      ARCHIVED: 'Αρχειοθετημένα',
    },
  
    MODALS: {
      DOCUMENTS_UPLOAD_MODAL: {
        TITLE: 'Έγγραφα μεταφορτώνονται',
        UPLOADING_DOCUMENTS: 'Μεταφόρτωση εγγράφων',
        INFO: 'Βεβαιωθείτε ότι οι εικόνες του εγγράφου σας είναι ευκρινείς και το κείμενο είναι ευανάγνωστο. Το μέγιστο μέγεθος του αρχείου είναι 10mb και οι υποστηριζόμενες μορφές είναι PNG, JPG.',
        DOCUMENTS: 'Έγγραφα',
        UPLOADED: 'Μεταφορτώθηκε',
        SUCCESS_UPLOAD_MESSAGE: 'Όλα τα έγγραφα μεταφορτώθηκαν με επιτυχία',
  
        FORM: {
          DOCUMENT_TYPE: 'Τύπος εγγράφου',
          SELECT_DOCUMENT_TYPE: 'Επιλέξτε τον τύπο του εγγράφου',
          DOCUMENT_TYPES: {
            'licence-front': 'Άδεια οδήγησης - Μπροστινή πλευρά',
            'licence-back': 'Άδεια οδήγησης - Πίσω πλευρά',
            'id-front': 'Ταυτότητα - Μπροστά',
            'id-back': 'Ταυτότητα - Πίσω',
            'other': 'Άλλα',
          },
        },
      },
      DEPOSIT_MODAL: {
        TITLE: {
          CASHIER: 'Ταμείο',
          FAIL: 'Ταμείο - Η πληρωμή απέτυχε',
          CANCEL: 'Ταμείο - Η πληρωμή ακυρώθηκε',
          SUCCESS: 'Ταμείο - Επιτυχής πληρωμή',
        },
        DEPOSIT_TO_ACCOUNT: 'Κατάθεση στον λογαριασμό συναλλαγών σας',
        DEPOSIT_INFO: 'Απλώς καταθέστε σε έναν από τους λογαριασμούς συναλλαγών σας επιλέγοντας τον από τη λίστα, επιλέγοντας έναν τρόπο πληρωμής και καθορίζοντας το επιθυμητό ποσό κατάθεσης.',
        PAYMENTS_SECURED_BY: 'Η πληρωμή εξασφαλίζεται από:',
        NEW_DEPOSIT: 'Νέα κατάθεση',
        FAIL: 'Δυστυχώς, η πληρωμή σας απέτυχε, δοκιμάστε ξανά ή χρησιμοποιήστε έναν διαφορετικό τρόπο πληρωμής',
        CANCEL: 'Η πληρωμή σας ακυρώθηκε',
        SUCCESS: 'Συγχαρητήρια! <br/> Η πληρωμή σας ήταν επιτυχής',
        FORM: {
          SELECT_TRADING_ACCOUNT: 'Επιλέξτε τον λογαριασμό συναλλαγών',
          CHOOSE_PAYMENT_METHOD: 'Επιλέξτε τον τρόπο πληρωμής',
        },
      },
      TRANSFER_MODAL: {
        TITLE: 'Ταμείο',
        TRANSFER_FUNDS_SUCCESS: 'Τα χρήματα μεταφέρθηκαν με επιτυχία!',
        TRANSFER_BETWEEN_ACCOUNTS: 'Μεταφορά χρημάτων μεταξύ των λογαριασμών συναλλαγών σας',
        TRANSFER_INFO: 'Τα μεταφερμένα χρήματα θα μετατραπούν αμέσως και θα πιστωθούν στον λογαριασμό συναλλαγών σας.',
        PAYMENTS_SECURED_BY: 'Η πληρωμή εξασφαλίζεται από:',
        TRANSFER_FUNDS: 'Μεταφορά χρημάτων',
        NOTE: 'Σημείωση: Το ποσό της μεταφοράς θα μετατραπεί με την τιμή μετατροπής που παρέχεται από τον διακομιστή MT4',
        EXCHANGE_RATE: 'Ισχύει η συναλλαγματική ισοτιμία',
  
        FORM: {
          TO_TRADING_ACCOUNT: 'Στο λογαριασμό συναλλαγών',
          FROM_TRADING_ACCOUNT: 'Από τον λογαριασμό συναλλαγών',
        },
      },
      WITHDRAW_MODAL: {
        TITLE: 'Ταμείο',
        WITHDRAW_FROM_ACCOUNT: 'Απόσυρση από τον λογαριασμό συναλλαγών',
        WITHDRAW_INFO: 'Ζητήστε την απόσυρση από έναν από τους λογαριασμούς συναλλαγών σας επιλέγοντας έναν λογαριασμό από τη λίστα, επιλέγοντας έναν λογαριασμό πληρωμής και καθορίζοντας το επιθυμητό ποσό της απόσυρσης.',
        PAYMENTS_SECURED_BY: 'Η πληρωμή εξασφαλίζεται από:',
        WITHDRAW_REQUEST: 'Απόσυρση αιτήματος',
        NOTE: 'Σημείωση: Το αίτημα απόσυρσης θα εξεταστεί από τον χειριστή μας εντός 24 ωρών.',
        WITHDRAW_MODAL_SUCCESS: 'Το αίτημα απόσυρσης στάλθηκε με επιτυχία',
  
        FORM: {
          FROM_TRADING_ACCOUNT: 'Από τον λογαριασμό συναλλαγών',
        },
      },
      UPDATE_VERSION_MODAL: {
        TITLE: 'Ενημερώστε την έκδοση της πύλης πελατών σας',
        TEXT: 'Η πύλη πελατών ενημερώθηκε. Για να συνεχίσετε να εργάζεστε με αυτήν, κάντε κλικ στο παρακάτω κουμπί. Θα φορτωθεί ξανά η σελίδα και θα ενημερωθεί η έκδοσή σας.',
        UPDATE_NOW: 'Ενημέρωση τώρα',
      },
      DOWNLOAD_APP_MODAL: {
        TITLE: 'Λήψη εφαρμογής',
        MT4_TRADING_PLATFORM: 'Πλατφόρμα συναλλαγών MT4',
        TEXT: 'Η βραβευμένη πλατφόρμα συναλλαγών MT4 έρχεται με όλες τις προηγμένες δυνατότητες που βοήθησαν να γίνει το MetaTrader η πιο δημοφιλής πλατφόρμα συναλλαγών forex στον κόσμο σήμερα.',
        MORE_INFO: 'Περισσότερες πληροφορίες στη ',
        KNOWLEDGE_BASE: ' γνωσιακή μας βάση',
        INSTALL_APP_TITLE: 'Για να ξεκινήσετε τις συναλλαγές θα πρέπει να εγκαταστήσετε μια εφαρμογή',
        DOWNLOAD_FREE_APP: 'Κατεβάστε την δωρεάν εφαρμογή MT4',
        OTHER_APPS: 'Εφαρμογές για άλλα λειτουργικά συστήματα',
        OS: {
          ANDROID: 'Android',
          IOS: 'IOS',
          WINDOWS: 'Windows',
          MACOS: 'MacOS',
        },
      },
      NEW_TRADING_ACCOUNT_MODAL: {
        TITLE: 'Νέος λογαριασμός συναλλαγών',
        CREATING_TRADING_ACCOUNT: 'Δημιουργία του λογαριασμού συναλλαγών',
        TRADING_ACCOUNT_CREATION_LIVE_DEMO: 'Για μέγιστη ευελιξία μπορείτε να δημιουργήσετε έως και {{maxLiveAccounts}} ζωντανούς λογαριασμούς συναλλαγών και έως {{maxDemoAccounts}} δοκιμαστικούς λογαριασμούς.',
        TRADING_ACCOUNT_CREATION_LIVE: 'Για μέγιστη ευελιξία μπορείτε να δημιουργήσετε έως και {{maxLiveAccounts}} ζωντανούς λογαριασμούς συναλλαγών.',
        ACCOUNTS_DETAILS: 'Οι λεπτομέρειες λογαριασμού',
        ACCOUNT_CREATED: 'Ο λογαριασμός δημιουργήθηκε με επιτυχία',
  
        FORM: {
          ACCOUNT_TYPE: 'Τύπος Λογαριασμού',
          ACCOUNT_NAME: 'Όνομα λογαριασμού',
          ACCOUNT_NAME_PLACEHOLDER: 'Ονομάστε τον νέο λογαριασμό σας',
          CURRENCY: 'Νόμισμα',
          PASSWORD: 'Κωδικός πρόσβασης του λογαριασμού συναλλαγών',
          PASSWORD_PLACEHOLDER: 'Δημιουργήστε τον κωδικό πρόσβασης για τον λογαριασμό συναλλαγών',
          PASSWORD_HINT: 'Τουλάχιστον 8 σύμβολα, 1 πεζό, 1 κεφαλαίο, 1 αριθμός',
          CREATE_ACCOUNT: 'Δημιουργία λογαριασμού',
          PLATFORM_TYPE: 'Τύπος πλατφόρμας',
        },
      },
      CHANGE_TRADING_ACCOUNT_PASSWORD_MODAL: {
        TITLE: 'Αλλαγή του κωδικού πρόσβασης του λογαριασμού συναλλαγών',
        CHANGE_PASSWORD_FOR: 'Αλλαγή του κωδικού πρόσβασης για - {{account}}',
        PASSWORD_CHANGED: 'Ο κωδικός πρόσβασης έχει αλλάξει με επιτυχία.',
  
        FORM: {
          PASSWORD: 'Νέος κωδικός πρόσβασης',
          PASSWORD_HINT: 'Τουλάχιστον 8 σύμβολα, 1 πεζό, 1 κεφαλαίο, 1 αριθμός',
          REPEAT_PASSWORD: 'Επαναλάβετε τον κωδικό πρόσβασης',
          REPEAT_PASSWORD_PLACEHOLDER: 'Επαναλάβετε τον νέο κωδικό πρόσβασης',
          CHANGE_PASSWORD: 'Αλλαγή του κωδικού πρόσβασης',
        },
      },
      CHANGE_LEVERAGE_MODAL: {
        TITLE: 'Request to change leverage',
        LEVERAGE_CHANGED: 'Το αίτημα για την αλλαγή της μόχλευσης στάλθηκε με επιτυχία',
        FORBIDDEN_CHANGE_LEVERAGE: 'Έχετε ήδη υποβάλει ένα αίτημα \' Αλλαγή μόχλευσης \' που βρίσκεται σε κατάσταση \' ΕΝ ΑΝΑΜΟΝΗ \'. Δεν μπορείτε να δημιουργήσετε άλλα αιτήματα μέχρι αλλάξει αυτή η κατάσταση ',
  
        FORM: {
          CHANGE_LEVERAGE: 'Αλλαγή μόχλευσης',
          MESSAGE: 'Επιλέξτε την προτιμώμενη μόχλευση και το αίτημα θα σταλεί για έλεγχο στο Τμήμα Backoffice μας. <br> <br> Λάβετε υπόψη ότι οι αλλαγές της μόχλευσης επηρεάζουν τις ανοιχτές θέσεις. Η μείωση της μόχλευσης μπορεί να οδηγήσει σε κλείσιμο περιθωρίου.',
        },
      },
      HISTORY_LEVERAGE_MODAL: {
        TITLE: 'Ιστορικό μόχλευσης',
        LEVERAGE: 'ΜΟΧΛΕΥΣΗ',
        STATUS: 'ΚΑΤΑΣΤΑΣΗ',
        CHANGE_DATE: 'ΑΛΛΑΓΗ ΗΜΕΡΟΜΗΝΙΑΣ',
        HISTORY_LEVERAGE_NOT_FOUND: 'Δεν βρέθηκε το ιστορικό αλλαγών μόχλευσης ',
      },
      SECOND_STEP_REGISTRATION: {
        TITLE: 'Δεύτερο βήμα εγγραφής',
        FILL_ALL_FIELDS: 'Συμπληρώστε όλα τα πεδία',
        COMPLETE_PERSONAL_PROFILE: 'Συμπληρώστε το προσωπικό σας προφίλ',
        TEXT: 'Αυτές οι πληροφορίες απαιτούνται από τους δημοσιονομικούς κανονισμούς και μας βοηθούν να προστατεύσουμε εσάς και τα χρήματά σας. Αυτό δεν απαιτεί περισσότερο από 5 λεπτά του χρόνου σας.',
        PAYMENTS_SECURED_BY: 'Η πληρωμή εξασφαλίζεται από:',
        FORM: {
          FIRST_NAME: 'Όνομα',
          FIRST_NAME_PLACEHOLDER: 'Το όνομά σας',
          LAST_NAME: 'Επώνυμο',
          LAST_NAME_PLACEHOLDER: 'Το επώνυμό σας',
          DATE_OF_BIRTH: 'Ημερομηνία γέννησης',
          CITY: 'Πόλη',
          POSTAL_CODE: 'Ταχυδρομικός Κώδικας',
          ADDRESS: 'Διεύθυνση',
          COUNTRY: 'Χώρα',
          PASSWORD: 'Κωδικός πρόσβασης του λογαριασμού συναλλαγών',
          PASSWORD_PLACEHOLDER: 'Δημιουργία του κωδικού πρόσβασης για τον λογαριασμό συναλλαγών',
          PASSWORD_HINT: 'Τουλάχιστον 8 σύμβολα, 1 πεζό, 1 κεφαλαίο, 1 αριθμός',
          REPEAT_PASSWORD: 'Επαναλάβετε τον κωδικό πρόσβασης',
          REPEAT_PASSWORD_PLACEHOLDER: 'Βεβαιωθείτε ότι είναι το ίδιο όπως παραπάνω',
        },
      },
      CANCEL_TRANSACTION_MODAL: {
        TITLE: 'Ακύρωση του αιτήματος απόσυρσης',
        TEXT: 'Θέλετε να ακυρώσετε το αίτημα απόσυρσης;',
        CANCEL_TRANSACTION_SUCCESS: 'Η συναλλαγή ακυρώθηκε με επιτυχία',
      },
      CONFIRM_CALLBACK_REQUEST: {
        TITLE: 'Επιβεβαίωση του αιτήματος επανάκλησης',
        TEXT: 'Χρειάζεστε την βοήθεια του συμβούλου; Είμαστε έτοιμοι να βοηθήσουμε! <br> Θα χαρούμε να απαντήσουμε στις ερωτήσεις σας, ο προσωπικός σας μάνατζερ θα σας καλέσει ξανά εντός 30 λεπτών.',
        NOTIFICATION: 'Ο χειριστής θα επικοινωνήσει μαζί σας σύντομα',
      },
    },
  
    TRANSACTIONS_HISTORY: {
      TITLE: 'Ιστορικό συναλλαγών',
      TRADING_ACC: 'Λογ. Συναλλαγών',
      PAYMENT_METHOD: 'Τρόπος πληρωμής',
      TRANSACTION: 'Συναλλαγή',
      TYPE: 'Τύπος',
      AMOUNT: 'Ποσό',
      DATE_AND_TIME: 'Ημερομηνία & ώρα',
      STATUS: 'Κατάσταση',
      NO_TRANSACTIONS: 'Δεν υπάρχουν οι διαθέσιμες συναλλαγές',
    },
  
    SIDEBAR_MENU: {
      DASHBOARD: 'Πίνακας εργαλείων',
      FINANCE: 'Χρηματοδότηση',
      TRADING: 'Συναλλαγές',
      ACCOUNTS: 'Λογαριασμοί',
      HISTORY: 'Ιστορικό',
      DOCUMENTS: 'Έγγραφα',
      REFERRAL_PROGRAM: 'Πρόγραμμα παραπομπής',
      MY_PROFILE: 'Το προφίλ μου',
      PERSONAL_INFO: 'Προσωπικές πληροφορίες',
      CHANGE_PASSWORD: 'Αλλαγή του κωδικού πρόσβασης',
      DOWNLOAD_MT4: 'Λήψη MT4',
      TERMS_AND_CONDITIONS: 'Όροι και Προϋποθέσεις',
    },
  
    SIDEBAR_INFO: {
      HELLO: 'Γεια σας',
    },
  
    FILE_DROPZONE_UPLOAD: {
      DRAG_AND_DROP: 'Μεταφέρετε και αποθέστε αρχεία εδώ',
      BROWSE_FILES: 'Αναζήτηση αρχείων',
      WARNING: 'Σημειώστε. <br> Οι υποστηριζόμενες μορφές είναι .pdf .jpeg .jpg .png. doc .docx .odt. <br> Το μέγιστο μέγεθος ενός αρχείου είναι 16 Mb. <br> Το μέγιστο μέγεθος ενός αρχείου δέσμης είναι 100 Mb.',
      ERRORS: {
        INVALID_SIZE: 'Το μέγεθος του αρχείου δεν πρέπει να υπερβαίνει τα 16 Mb.',
        INVALID_TYPE: 'Λάθος μορφή αρχείου.',
        INVALID_TOTAL_SIZE: 'Το συνολικό μέγεθος των μεταφορτωμένων αρχείων δεν πρέπει να υπερβαίνει τα 100 Mb.',
        COMMON: 'Μερικά από τα μεταφορτωμένα αρχεία έχουν μη έγκυρη μορφή ή μέγεθος. Διορθώστε το και προσπαθήστε να τα ανεβάσετε ξανά.',
      },
    },
  
    ERROR_BOUNDARY: {
      TITLE: 'Σφάλμα',
      DESCRIPTION: 'Κάτι πήγε στραβά',
      TRY_RELOAD_PAGE: 'Προσπαθήστε να φορτώσετε ξανά τη σελίδα',
      RELOAD_PAGE: 'Επαναφόρτωση σελίδας',
    },
  
    FOOTER: {
      COPYRIGHTS: '© {{year}} {{brand}}, Α.Ε. Με επιφύλαξη παντός δικαιώματος.',
    },
  
    NO_FOUND_TRADING_ACCOUNTS_OPTION: {
      NO_ACCOUNTS: 'Δεν υπάρχουν διαθέσιμοι λογαριασμοί συναλλαγών',
      CREATE_ACCOUNT: 'Δημιουργία λογαριασμού',
    },
  
    SIGN_IN: {
      TITLE: 'ΣΥΝΔΕΘΕΙΤΕ',
      DONT_HAVE_ACCOUNT: 'Δεν έχετε ακόμα τον λογαριασμό;',
      SIGN_UP_NOW: 'Εγγραφείτε τώρα',
      FORGOT_PASSWORD: 'Ξεχάσατε τον κωδικό σας;',
  
      FORM: {
        EMAIL: 'Email',
        EMAIL_PLACEHOLDER: 'Η ηλεκτρονική διεύθυνσή σας',
        PASSWORD: 'Κωδικός πρόσβασης',
        PASSWORD_PLACEHOLDER: 'Τουλάχιστον {{signsNum}} σημάδια',
        LOGIN: 'ΣΥΝΔΕΣΗ',
      },
    },
  
    SIGN_UP: {
      TITLE: 'ΕΓΓΡΑΦΕΙΤΕ',
      ZERO_COMMISSIONS: 'ΜΗΔΕΝΙΚΕΣ ΠΡΟΜΗΘΕΙΕΣ',
      INFO: '- Συναλλάξτε περισσότερα με λιγότερα <br/> - Χωρίς προμήθειες <br/> - Ανταγωνιστικές διαδόσεις <br/> - Γρήγορη εκτέλεση <br/>',
      NOTE: 'Σημείωση: Οι συναλλαγές συνεπάγονται σημαντικό κίνδυνο απώλειας',
      ALREADY_REGISTERED: 'Έχετε ήδη εγγραφεί;',
      SIGN_IN_HERE: 'Συνδεθείτε εδώ',
  
      FORM: {
        FIRST_NAME: 'Όνομα',
        FIRST_NAME_PLACEHOLDER: 'Το όνομά σας',
        LAST_NAME: 'Επώνυμο',
        LAST_NAME_PLACEHOLDER: 'Το επώνυμό σας',
        EMAIL: 'E-mail',
        EMAIL_PLACEHOLDER: 'Η ηλεκτρονική διεύθυνσή σας',
        PASSWORD: 'Κωδικός πρόσβασης',
        PASSWORD_PLACEHOLDER: 'Τουλάχιστον {{signsNum}} σημάδια',
        PASSWORD_HINT: 'Ο κωδικός πρόσβασης πρέπει να περιέχει τουλάχιστον ένα γράμμα και ένα ψηφίο',
        COUNTRY: 'Χώρα',
        PHONE: 'Τηλέφωνο',
        PHONE_PLACEHOLDER: 'Το τηλέφωνό σας',
        NOT_USA_CITIZEN: 'Είμαι Δεν είμαι πολίτης των ΗΠΑ.',
        TERMS_AND_CONDITIONS: 'Όροι και Προϋποθέσεις',
        COMPANY_POLICY: 'Εταιρικές πολιτικές',
        PRIVACY_POLICY: 'Πολιτική απορρήτου',
        RISK_ACKNOWLEDGEMENT : 'Αναγνώριση κινδύνου',
        DISCLAIMER: 'Αποποίηση ευθυνών',
        POLICY: 'πολιτική',
        ACCEPT_TERMS: 'Έχω διαβάσει και αποδέχομαι τους {{termsAndConditions}} του Συμφωνητικού Πελάτη, {{companyPolicy}}, {{privacyPolicy}}, {{riskAcknowledgement}} και {{disclaim}}. Αποδέχομαι επίσης και συμφωνώ στην επεξεργασία των προσωπικών μου δεδομένων σύμφωνα με το {{brandIdLink}}.',
        AGREE_OPEN_ACCOUNT: 'Θα ήθελα να ανοίξω έναν λογαριασμό με το {{brandId}}. Επιβεβαιώνω ότι έφτασα στο {{brandId}} με δική μου βούληση και πρωτοβουλία. Συμφωνώ επίσης να επικοινωνήσω με τους εκπροσώπους της Εταιρείας μέσω τηλεφώνου ή / και email.',
        TERM_STATEMENT: 'Όροι/δήλωση όρων',
        ALLOWED_AGE: 'Είμαι άνω των 18 ετών.'
      },
    },
  
    RESET_PASSWORD: {
      TITLE: 'Επαναφορά κωδικού πρόσβασης',
      REMEMBER_PASSWORD: 'Θυμάστε τον κωδικό πρόσβασης;',
      SIGN_IN: 'Συνδεθείτε',
      ENTER_EMAIL: 'Εισαγάγετε το email με το οποίο έχετε εγγραφεί',
  
      FORM: {
        EMAIL: 'Email',
        EMAIL_PLACEHOLDER: 'Η ηλεκτρονική διεύθυνσή σας',
      },
  
      SUCCESS: {
        CHECK_INBOX: 'Ελέγξτε τα εισερχόμενά σας',
        EMAIL_SENT_TO: 'Στείλαμε ένα email στο',
        WITH_INSTRUCTIONS: 'με λεπτομερείς οδηγίες σχετικά με τον τρόπο επαναφοράς του κωδικού πρόσβασής σας.',
        CHECK_SPAM: 'Μην ξεχάσετε να ελέγξετε τον φάκελο ανεπιθύμητων μηνυμάτων μόνο σε περίπτωση που δεν έχετε λάβει το email.',
        LOGIN_NOW: 'ΣΥΝΔΕΘΕΙΤΕ ΤΩΡΑ',
      },
    },
  
    SET_PASSWORD: {
      TITLE: 'Ορίστε τον νέο κωδικό πρόσβασής σας',
      PASSWORD_CHANGE_SUCCESS: 'Ο κωδικός πρόσβασής σας έχει αλλάξει με επιτυχία',
  
      FORM: {
        PASSWORD: 'Νέος κωδικός πρόσβασης',
        PASSWORD_PLACEHOLDER: 'Τουλάχιστον {{signsNum}} σημάδια',
        PASSWORD_HINT: 'Ο κωδικός πρόσβασης πρέπει να περιέχει τουλάχιστον ένα γράμμα και ένα ψηφίο',
  
        REPEAT_PASSWORD: 'Επανάληψη κωδικού πρόσβασης',
        REPEAT_PASSWORD_PLACEHOLDER: 'Βεβαιωθείτε ότι είναι το ίδιο όπως παραπάνω',
  
        RESET_PASSWORD: 'Επαναφορά του κωδικού πρόσβασης',
      },
    },
  
    SECURITY_NOTIFICATION: {
      TITLE: 'Ειδοποίηση ασφαλείας',
      BOLD_INFO: 'Δεν έχετε αλλάξει τον κωδικό πρόσβασής σας για μεγάλο χρονικό διάστημα.',
      INFO: 'Σας συνιστούμε να το κάνετε τώρα για λόγους ασφαλείας',
      EMAIL_INFO: 'Εισαγάγετε το email με το οποίο έχετε εγγραφεί',
      CHANGE_PASSWORD: 'Αλλαγή του κωδικού πρόσβασης',
      EMAIL_SUCCESSFULLY_SENT: 'Αποστολή email στο% {email} με λεπτομερείς οδηγίες σχετικά με τον τρόπο επαναφοράς του κωδικού πρόσβασής σας',
  
      FORM: {
        EMAIL: 'Email',
        EMAIL_PLACEHOLDER: 'Η ηλεκτρονική διεύθυνσή σας',
      },
    },
  
    PERSONAL_INFO: {
      TITLE: 'Προσωπικές πληροφορίες',
      DESCRIPTION: 'Διατηρήστε τα προσωπικά σας στοιχεία ενημερωμένα! Λάβετε υπόψη ότι χρησιμοποιούμε αυτές τις πληροφορίες για να επικοινωνούμε και να σας ενημερώνουμε για τον λογαριασμό σας ανά πάσα στιγμή. Βεβαιωθείτε ότι οι πληροφορίες είναι ακριβείς.',
      UPDATE_SUCCESS: 'Το προφίλ ενημερώθηκε με επιτυχία',
  
      FORM: {
        FIRST_NAME: 'Όνομα',
        FIRST_NAME_PLACEHOLDER: 'Το όνομά σας',
        LAST_NAME: 'Επώνυμο',
        LAST_NAME_PLACEHOLDER: 'Το επώνυμό σας',
        GENDER: 'Φύλο',
        GENDER_MALE: 'Άρρεν',
        GENDER_FEMALE: 'Θήλυ',
        DATE_OF_BIRTH: 'Ημερομηνία γέννησης',
        LANGUAGE: 'Γλώσσα',
        ID_NUMBER: 'Αριθμός αναγνώρισης',
        CITY: 'Πόλη',
        POSTAL_CODE: 'Ταχυδρομικός Κώδικας',
        ADDRESS: 'Διεύθυνση',
        COUNTRY: 'Χώρα',
        EMAIL: 'Email',
        ALT_EMAIL: 'Εναλλακτικό Email',
        EMAIL_VERIFIED: 'Επαληθεύτηκε',
        PHONE: 'Τηλέφωνο',
        PHONE_PLACEHOLDER: 'Το τηλέφωνό σας',
        ALT_PHONE: 'Εναλλακτικό τηλέφωνο',
        ALT_PHONE_PLACEHOLDER: 'Το εναλλακτικό τηλέφωνό σας',
        UPDATE_PROFILE: 'Ενημέρωση προφίλ',
        MORE_INFO: 'Περισσότερες πληροφορίες',
        GDPR: {
          TITLE: 'GDPR',
          EMAIL: 'Email',
          PHONE: 'Τηλέφωνο',
          SOCIAL_MEDIA: 'Μέσα κοινωνικής δικτύωσης',
          SMS: 'Μήνυμα SMS',
        },
        SPAM: {
          TITLE: 'ΑΝΕΠΙΘΥΜΗΤΑ',
          MARKET_NEWS: 'Νέα της αγοράς',
          INFORMATION: 'Πληροφορίες',
          EDUCATIONAL: 'Εκπαιδευτικό',
          PROMOS_OFFERS: 'Promo & προσφορές',
          STATISTICS_SUMMARY: 'Στατιστικά & Περίληψη',
        },
        WEB_COOKIES: {
          TITLE: 'Cookies Ιστού',
          ACCEPT: 'Επιτρέπετε τα cookies;',
        },
        COUNTRY_SPECIFIC_IDENTIFIER: 'Αναγνωριστικό συγκεκριμένης χώρας',
        COUNTRY_SPECIFIC_IDENTIFIER_TYPE: 'Τύπος αναγνωριστικού για κάθε χώρα',
        COUNTRY_SPECIFIC_IDENTIFIER_TYPES: {
          TEN_DSS_DIGIT_INVESTOR_SHARE: '10 ψήφιο DSS μερίδιο επενδυτή ',
          ELEVEN_DIGIT_PERSONAL_ID: '11ψήφιο προσωπικό αναγνωριστικό',
          BELGIAN_NATIONAL_NUMBER: 'Εθνικός αριθμός Βελγίου',
          BULGARIAN_PERSONAL_NUMBER: 'Βουλγαρικός προσωπικός αριθμός',
          CONCAT: 'CONCAT',
          ESTONIAN_PERSONAL_IDENTIFICATION_CODE: 'Εσθονικός κωδικός ταυτοποίησης',
          FISCAL_CODE: 'Δημοσιονομικός κώδικας',
          NATIONAL_IDENTIFICATION_NUMBER: 'Εθνικός αριθμός ταυτοποίησης',
          NATIONAL_IDENTIFICATION_NUMBER_COD_NUMERIC_PERSONAL: 'Εθνικός αριθμός ταυτοποίησης (Cod Numeric Personal)',
          NATIONAL_IDENTIFICATION_NUMBER_PESEL: 'Εθνικός αριθμός ταυτοποίησης (PESEL)',
          NATIONAL_PASSPORT_NUMBER: 'Αριθμός εθνικού διαβατηρίου',
          PERSONAL_CODE_ASMENS_KODAS: 'Προσωπικός κωδικός (Asmens kodas)',
          PERSONAL_CODE_PERSONAS_KODS: 'Προσωπικός κωδικός (Personas kods)',
          PERSONAL_IDENTIFICATION_NUMBER: 'Προσωπικός αριθμός ταυτοποίησης',
          PERSONAL_IDENTITY_CODE: 'Προσωπικός κωδικός προσώπου',
          PERSONAL_IDENTITY_CODE_TEN_DIGITS_ALPHANUMERICAL_DDMMYYXXXX: 'Προσωπικός κωδικός προσώπου - 10 ψηφία αλφαριθμητικού κωδικού: DDMMYYXXXX        ',
          PERSONAL_IDENTITY_CODE_KENNITALA_ICELAND: 'Προσωπικός κωδικός προσώπου (Kennitala / Ισλανδία)',
          PERSONAL_IDENTITY_NUMBER: 'Προσωπικός αριθμός προσώπου',
          PERSONAL_NUMBER: 'Προσωπικός αριθμός',
          TAX_IDENTIFICATION_NUMBER: 'Αριθμός φορολογικής ταυτοποίησης',
          TAX_NUMBER: 'Αριθμός φορολογικού μητρώου',
          UK_NATIONAL_INSURANCE_NUMBER: 'Αριθμός εθνικής ασφάλισης του Ηνωμένου Βασιλείου',
        },
        UPDATE_DETAILS_TOOLTIP: {
          TEXT: 'Μπορείτε να ενημερώσετε τα στοιχεία σας στέλνοντας όλες τις σχετικές πληροφορίες και τα συνοδευτικά έγγραφα στον  {{receiver}}',
          DEFAULT_RECEIVER: 'ο Πράκτορας σας',
        },
      },
    },
  
    CHANGE_PASSWORD: {
      TITLE: 'Αλλαγή του κωδικού πρόσβασης',
      DESCRIPTION: 'Το απόρρητό σας είναι ένα μεγάλο ζήτημα για εμάς, κάνουμε ό, τι μπορούμε για να διατηρήσουμε τις πληροφορίες σας απόρρητες. Για τη δική σας ασφάλεια και απόρρητο, σας συνιστούμε να ενημερώνετε τον κωδικό πρόσβασής σας κάθε τρεις μήνες. Κρατήστε το ιδιωτικό και εμπιστευτικό, μην το μοιραστείτε με κανέναν, συμπεριλαμβανομένου του προσωπικού. Να θυμάστε ότι αυτό θα αλλάξει τον κωδικό πρόσβασής σας στην περιοχή πελατών και σε όλους τους λογαριασμούς συναλλαγών σας.',
      SUCCESS_MESSAGE: 'Ο κωδικός πρόσβασης έχει αλλάξει με επιτυχία. Θα πρέπει να συνδεθείτε ξανά.',
  
      FORM: {
        CURRENT_PASSWORD: 'Τρέχων κωδικός πρόσβασης',
        NEW_PASSWORD: 'Νέος κωδικός πρόσβασης',
        NEW_PASSWORD_HINT: 'Ο κωδικός πρόσβασης πρέπει να περιέχει τουλάχιστον ένα γράμμα και ένα ψηφίο',
        REPEAT_NEW_PASSWORD: 'Επανάληψη του κωδικού πρόσβασης',
        REPEAT_NEW_PASSWORD_PLACEHOLDER: 'Επανάληψη του νέου κωδικού πρόσβασης',
      },
    },
  
    TRADING_ACCOUNTS: {
      TITLE: 'Λογαριασμοί συναλλαγών',
      ADD_NEW_ACCOUNT: '+ Νέος λογαριασμός',
      CHANGE_PASSWORD: 'Αλλαγή του κωδικού πρόσβασης',
      CHANGE_LEVERAGE: 'Αίτημα για αλλαγή μόχλευσης',
      HISTORY_LEVERAGE: 'Ιστορικό αλλαγών μόχλευσης',
      TRADING_ACCOUNT: 'Λογαριασμός συναλλαγών',
      TYPE: 'Τύπος',
      BALANCE: 'Υπόλοιπο',
      LOGIN: 'Σύνδεση',
      CREDIT: 'Πίστωση',
      LEVERAGE: {
        TITLE: 'Μόχλευση',
        FROM: 'από',
        TO: 'προς το',
        SINCE: 'από τότε που',
        CANCEL_NOTIFICATION_SUCCESS: 'Η ακύρωση του αιτήματος για αλλαγή μόχλευσης έγινε με επιτυχία',
        CANCEL_NOTIFICATION_FAILED: 'Η ακύρωση του αιτήματος για αλλαγή μόχλευσης απέτυχε',
      },
      SERVER: 'Διακομιστής',
      ACCOUNT_CREATED: 'Ο λογαριασμός δημιουργήθηκε με επιτυχία',
      NO_TRADING_ACC: 'Δεν υπάρχουν οι λογαριασμοί συναλλαγών',
      NO_CREATE_ACC: 'Δεν επιτρέπεται να δημιουργήσετε ένα λογαριασμό συναλλαγών, εκτός εάν περάσετε την Αξιολόγηση της καταλληλότητας και τα KYC έγγραφά σας έχουν εγκριθεί.',
      TRADING_ACCOUNT_LIMIT: 'Εάν είστε πρόθυμοι να ανοίξετε τον επιπλέον λογαριασμό, επικοινωνήστε με το {{supportEmail}} και δώστε τον λόγο για τη δημιουργία του νέου πρόσθετου λογαριασμού.',
    },
  
    TRADING_HISTORY: {
      TITLE: 'Ιστορικό συναλλαγών',
      TRADE: 'Συναλλαγές',
      TYPE: 'Τύπος',
      OPEN_TIME: 'Οι ώρες λειτουργίας',
      CLOSE_TIME: 'Ώρα κλεισίματος',
      SYMBOL: 'Σύμβολο',
      VOLUME: 'Όγκος',
      OPEN_PRICE: 'Άνοιγμα των τιμών',
      CLOSE_PRICE: 'Κλείσιμο των τιμών',
      COMMISSION: 'Προμήθεια',
      SWAP: 'Ανταλαγή',
      PROFIT: 'Κέρδος',
      TYPES: {
        OP_BUY: 'Αγορά',
        OP_SELL: 'Πώληση',
        OP_BUY_LIMIT: 'Όριο αγοράς',
        OP_SELL_LIMIT: 'Όριο πώλησης',
        OP_BUY_STOP: 'Παύση της αγοράς',
        OP_SELL_STOP: 'Παύση της πώλησης',
        OP_BUY_MARKET: 'Αγορά',
        OP_SELL_MARKET: 'Πώληση',
        OP_BUY_STOP_LIMIT: 'Όριο παύσης αγοράς',
        OP_SELL_STOP_LIMIT: 'Όριο παύσης πώλησης',
        OP_BALANCE: 'Υπόλοιπο',
        OP_CREDIT: 'Πίστωση',
      },
      FILTERS: {
        TRADING_ACCOUNT: 'Λογαριασμός συναλλαγών',
        TRADE_STATUS: 'Κατάσταση συναλλαγών',
        OPEN: 'Άνοιγμα',
        CLOSED: 'Κλείσιμο',
        OPEN_TIME_RANGE: 'Άνοιγμα του χρονικού διαστήματος',
        CLOSE_TIME_RANGE: 'Κλείσιμο του χρονικού διαστήματος',
        PENDING: 'Εν αναμονή',
      },
    },
  
    DOCUMENTS: {
      TITLE: 'Επαλήθευση τεκμηρίωσης',
      DESCRIPTION_UNREGULATED: '<p>Στείλτε μας τα ζητούμενα έγγραφα. </p> <p> Για να επαληθεύσετε πλήρως τον λογαριασμό σας και να τον ενεργοποιήσετε, θα σας ζητήσουμε να μας δώσετε τις έγχρωμες φωτογραφίες / σαρώσεις των ακόλουθων εγγράφων, διασφαλίζοντας ότι κάθε έγγραφο είναι πλήρες και καθαρά ορατό, συμπεριλαμβανομένων των άκρων του. Ασπρόμαυρα αντίγραφα ή / και αντίγραφα στα οποία δεν είναι ορατά τα άκρα των εγγράφων ΔΕΝ θα είναι δεκτά. </p> <p> Λάβετε υπόψη ότι τα έγγραφα KYC συλλέγονται από τον κάτοχο του λογαριασμού συναλλαγών - τον καταθέτη, επομένως όλα τα έγγραφα πρέπει να ταιριάζουν με τα στοιχεία του κατόχου του τραπεζικού λογαριασμού ή της πιστωτικής κάρτας από την οποία γίνονται οι καταθέσεις.</p> <h3> 1. Απόδειξη της ταυτότητας </h3> <p> Μεταφορτώστε ένα έγχρωμο αντίγραφο οποιουδήποτε από τα ακόλουθα έγγραφα που εμφανίζει σαφώς τις τέσσερις γωνίες, τον αριθμό ταυτότητας και το πλήρες όνομα. Επιπλέον, πρέπει να εμφανίζει έγκυρη ημερομηνία λήξης </p> <ul> <li> Διαβατήριο </li> <li> Εθνική ταυτότητα </li> </ul> <h3> 2. Απόδειξη διαμονής </h3> <p> Ένα επίσημο έγγραφο με ημερομηνία έκδοσης εντός των τελευταίων 3 μηνών, που εκδόθηκε στο όνομά σας, με την πλήρη διεύθυνση, με το λογότυπο του εκδότη. Ως απόδειξη διαμονής, μπορείτε να ανεβάσετε: </p> <ul> <li> Λογαριασμοί κοινής ωφέλειας (λογαριασμοί ηλεκτρικού ρεύματος, λογαριασμοί παροχής νερού, λογαριασμοί σταθερού τηλεφώνου ή λογαριασμοί φυσικού αερίου, λογαριασμοί κινητής τηλεφωνίας και διαδικτύου) </li> <li> Πιστοποιητικό διαμονής εκδοθέν από κυβερνητική αρχή </li> <li> Τραπεζικές καταστάσεις (δήλωση σχετικά με την έκδοση της νέας ΠΚ ή το άνοιγμα νέου τραπεζικού λογαριασμού ή οποιαδήποτε άλλη ενέργεια έχει εκτελεθεί με τον λογαριασμό του πελάτη, δεδομένου ότι αυτό το έγγραφο δεν είναι παλαιότερο των 3 μηνών) </li> <li> Φορολογικό πιστοποιητικό </li> </ul> <h3> 3.Απόδειξη πληρωμής </h3> <p> Αντίγραφο της κάρτας πληρωμής που χρησιμοποιείται για κατάθεση: </p> <p> <strong> Μπροστά: </strong> </p> <ul> <li> Εμφάνιση του πλήρους σας ονόματος < / li> <li> Με έγκυρη ημερομηνία λήξης </li> <li> Εμφάνιση των πρώτων 6 ψηφίων και των τελευταίων 4 ψηφίων της κάρτας (απόκρυψη των άλλων ψηφίων) </li> </ul> <p> <strong> Πίσω: </strong> </p> <ul> <li> Η υπογραφή της λωρίδας </li> <li> Απόκρυψη του κωδικού cvv </li> <li> Απόκρυψη όλων των ψηφίων της κάρτας πληρωμής εκτός από τα πρώτα 6 ψηφία και 4 τελευταία ψηφία </li> </ul> <h3> 4. Δήλωση κατάθεσης (DOD) </h3> <p> Επιβεβαίωση της online συναλλαγής σας</p>',
      KYC_VERIFICATION_TITLE: 'Έγγραφα & επαλήθευση KYC',
    },
  
    FILE_DROPZONE_UPLOAD_SMALL: {
      ATTACH: "Αποθέστε το αρχείο για επισύναψη ή",
      BROWSE: "Περιήγηση.",
      MAX_FILE_SIZE: "Μέγιστο μέγεθος αρχείου",
    },
  
    DASHBOARD: {
      TITLE: 'Πίνακας εργαλείων',
    },
  
    FINANCE: {
      TITLE: 'Χρηματοδότηση',
      TO_TRADING_ACCOUNT: 'Στο λογαριασμό συναλλαγών',
      FROM_TRADING_ACCOUNT: 'Από λογαριασμό συναλλαγών',
      NO_MATCH: 'Δεν υπάρχουν λογαριασμοί που ταιριάζουν',
    },
  
    VERIFY_PROFILE: {
      SUCCESSFULLY_VERIFIED: 'Εmail επαληθεύτηκε με επιτυχία',
      VERIFICATION_FAILED: 'Η επαλήθευση του Εmail απέτυχε',
    },
  
    REFERRAL_PROGRAM: {
      TITLE: 'Πρόγραμμα παραπομπής',
      YOUR_PERSONAL_LINK: 'Ο προσωπικός σας σύνδεσμος',
      YOUR_REFERRAL_LINK_COPIED: 'Ο σύνδεσμος παραπομπής αντιγράφεται στο πρόχειρο!',
      REMUNERATION_ACCOUNT_SAVED: 'Ο λογαριασμός συναλλαγών για αμοιβή αποθηκεύτηκε με επιτυχία',
  
      FORM: {
        CHOOSE_ACCOUNT: 'Επιλογή',
        TRADING_ACCOUNT: 'Λογαριασμός συναλλαγών',
      },
  
      INTRODUCED_REFERRALS: 'Εισηγμένες παραπομπές',
      NO_REFERRALS: 'Δεν υπάρχουν παραπομπές',
  
      REFERRAL_NAME: 'Όνομα παραπομπής',
      REFERRAL_STATUS: 'Κατάσταση παραπομπής',
      REFERRAL_STATUSES: {
        VERIFIED: 'ΕΠΑΛΗΘΕΥΤΗΚΕ',
        NOT_VERIFIED: 'ΔΕΝ ΕΠΑΛΗΘΕΥΤΗΚΕ'
      },
      BONUS_TYPE: 'Τύπος μπόνους',
      BONUS_TYPES: {
        REGISTRATION: 'Εγγραφή',
        FTD: 'FTD'
      },
      REGISTRATION_DATE: 'Ημερομηνία Εγγραφής',
      FTD_AMOUNT: 'Ποσό FTD',
      FTD_DATE: 'Ημερομηνία FTD',
      REMUNERATION: 'Αμοιβή',
      REMUNERATION_DATE: 'Ημερομηνία αμοιβής',
    },
  
    WEBTRADER: {
      TITLE: 'WebTrader',
      START_WEBTRADER: 'Web Trader',
    },
  
    NOT_FOUND: {
      TITLE: '404 Η ΣΕΛΙΔΑ ΔΕΝ ΒΡΕΘΗΚΕ',
      DESCRIPTION: 'Η σελίδα που ψάχνετε δεν υπάρχει. μπορεί να έχει μετακινηθεί ή να αφαιρεθεί εντελώς. Θα ανακατευθυνθείτε στην αρχική σελίδα σε',
      SECONDS: 'δευτερόλεπτα',
      GO_TO_HOME: 'Επιστροφή στην αρχική σελίδα',
    },
  
    // Backend API errors
    sign: {
      in: {
        from: {
          restricted: {
            country: 'Προσπαθήσατε να συνδεθείτε από μια περιορισμένη χώρα',
          },
        },
      },
    },
    error: {
      entity: {
        not: {
          found: 'Δεν βρέθηκε',
        },
      },
      access: {
        unauthorized: 'Λάθος χρήστης / κωδικός πρόσβασης',
      },
      user: {
        locked: {
          by: {
            operator: 'Ο χρήστης είναι κλειδωμένος, επικοινωνήστε με την υποστήριξη πελατών',
          },
          failed: {
            sign: {
              in: {
                attempts: {
                  exceeded: 'Ο χρήστης έχει κλειδωθεί λόγω 5 αποτυχημένων προσπαθείων σύνδεσης',
                },
              },
            },
          },
        },
      },
      validation: {
        password: {
          nonEquals: 'Εισαγάγατε λάθος κωδικό πρόσβασης, δοκιμάστε ξανά',
          repeated: 'Χρησιμοποιήσατε αυτόν τον κωδικό πρόσβασης πρόσφατα. Επιλέξτε έναν διαφορετικό.',
        },
        email: {
          exist: 'Το Εmail υπάρχει ήδη',
          invalid: 'Μη έγκυρη μορφή του Εmail',
        },
        birthDate: {
          age: 'Καθορίστηκε μη έγκυρη ηλικία',
        },
        country: {
          restricted: 'Προσπαθήσατε να συνδεθείτε από μια περιορισμένη χώρα',
        },
        insufficient: {
          found: 'Το αίτημα της απόσυρσης είναι αδύνατο επειδή το ζητούμενο ποσό υπερβαίνει το υπόλοιπο του λογαριασμού συναλλαγών σας',
        },
        withdraw: {
          limit: {
            exceed: 'Το αίτημα της απόσυρσης είναι αδύνατο επειδή το ποσό του προηγούμενου αίτηματος (τών) υπερβαίνει το υπόλοιπο του λογαριασμού συναλλαγών σας',
          },
          free: {
            margin: {
              limit: {
                exceed: 'Το ζητούμενο ποσό υπερβαίνει το (Δωρεάν Περιθώριο - Πίστωση) - το ποσό των προηγούμενων αιτημάτων',
              },
            },
          },
        },
        failed: 'Η λειτουργία απέτυχε',
      },
    },
  },
}


const enJsonData = {
  name: 'en.json',
  value: JSON.stringify(translations.en),
};

const deJsonData = {
  name: 'de.json',
  value: JSON.stringify(translations.de),
};

const elJsonData = {
  name: 'el.json',
  value: JSON.stringify(translations.el),
};

export const initialJsonsData = [enJsonData, deJsonData, elJsonData];
