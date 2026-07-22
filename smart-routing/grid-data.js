(function () {
  /* Each row carries two distinct statuses:
       status         – the ORDER status (the order's fulfillment state, e.g. Acknowledged, En route, Completed).
                        This is the main status. Badge text is rendered as `orderType + ' ' + status.t`.
       scheduleStatus – supplemental scheduling state (e.g. Patient Scheduling, Provider Review, Escalated, Rescheduled). */
  window.SMART_ROUTING_DEFAULT_ROWS = [
    { assignee: '', order: '123455005', orderType: 'Delivery', note: true, priority: 'STAT', priorityStat: true, reason: 'Respiratory Distress', patient: 'Sophia Lee', orderedDate: '06/03/2026', orderedTime: '10:43 AM', reqDate: '06/04/2026', reqTime: '10:00 AM - 2:00 PM CT', schedDate: '', schedTime: '', status: { t: 'En route', v: 'warning' }, scheduleStatus: { t: 'Provider Review', v: 'caution' }, tags: [{ t: 'Liquid O2', v: 'neutral' }, { t: 'Time-Sensitive', v: 'error' }],
      client: 'HarborLight Hospice Care', branch: 'HarborLight Hospice Care - Birmingham', addrType: 'Residence', addr: ['7202 Riverchase Pkwy', 'Birmingham, AL, 35203'], contact: 'Charles Williams', rel: 'Spouse', phone: '(205) 580-0847', phoneType: 'Landline', warehouse: 'Birmingham, AL' },
    { assignee: '', order: '123455003', orderType: 'Delivery', note: false, priority: 'STAT', priorityStat: true, reason: 'Urgent Admission', patient: 'Oliver King', orderedDate: '06/03/2026', orderedTime: '2:17 PM', reqDate: '', reqTime: '', schedDate: '', schedTime: '', status: { t: 'Acknowledged', v: 'caution' }, scheduleStatus: { t: 'Patient Scheduling', v: 'warning' }, tags: [{ t: 'Specialty', v: 'neutral' }],
      client: 'Big Heart Hospice & Home Care', branch: 'Big Heart Gadsden', addrType: 'Residence', addr: ['9055 Pinewood Ln', 'Gadsden, AL, 35903'], contact: 'Marcus', rel: 'Unknown', phone: '(659) 841-9754', phoneType: 'Mobile', warehouse: 'Birmingham, AL' },
    { assignee: '', order: '123455007', orderType: 'Delivery', note: false, priority: 'Urgent', priorityStat: false, reason: 'First Admission', patient: 'Liam Johnson', orderedDate: '06/03/2026', orderedTime: '11:52 AM', reqDate: '06/04/2026', reqTime: '12:00 - 4:00 PM CT', schedDate: '06/04/2026', schedTime: '2:00 - 4:00 PM CT', status: { t: 'En route', v: 'warning' }, scheduleStatus: { t: 'Patient Approval', v: 'warning' }, tags: [{ t: 'Facility', v: 'neutral' }],
      client: 'Big Heart Hospice & Home Care', branch: 'Big Heart Gadsden', addrType: 'Residence', addr: ['8986 Highland Ave #165', 'Gadsden, AL, 35901'], contact: 'Mary', rel: 'Caregiver', phone: '(659) 929-9407', phoneType: 'Mobile', warehouse: 'Trussville, AL' },
    { assignee: '', order: '123455009', orderType: 'Pickup', note: true, priority: 'Routine', priorityStat: false, reason: 'Live Discharge', patient: 'Nina Patel', orderedDate: '06/03/2026', orderedTime: '9:03 AM', reqDate: '06/04/2026', reqTime: '1:00 - 5:00 PM CT', schedDate: '', schedTime: '', status: { t: 'Completed', v: 'success' }, scheduleStatus: { t: 'Escalated', v: 'error' }, tags: [{ t: 'Live Discharge Confirmed', v: 'neutral' }],
      client: 'Comfort Home Health', branch: 'Trussville, AL', addrType: 'Residence', addr: ['2040 Chalkville Rd', 'Trussville, AL, 35173'], contact: 'Karen Thomas', rel: 'Spouse', phone: '(938) 269-8174', phoneType: 'Mobile', warehouse: 'Trussville, AL' },
    { assignee: '', order: '123455011', orderType: 'Delivery', note: false, priority: 'Priority', priorityStat: false, reason: 'First Admission', patient: 'Isabella Brown', orderedDate: '06/04/2026', orderedTime: '4:29 PM', reqDate: '06/04/2026', reqTime: '8:00 AM - 12:00 PM CT', schedDate: '', schedTime: '', status: { t: 'En route', v: 'warning' }, scheduleStatus: { t: 'Escalated', v: 'error' }, tags: [],
      client: 'Comfort Home Health', branch: 'Birmingham, AL', addrType: 'Residence', addr: ['4547 Lakeshore Dr', 'Birmingham, AL, 35211'], contact: 'Lisa', rel: 'Unknown', phone: '(205) 306-8639', phoneType: 'Landline', warehouse: 'Birmingham, AL' },
    { assignee: 'Me', order: '123455015', orderType: 'Delivery', note: false, priority: 'STAT', priorityStat: true, reason: 'First Admission', patient: 'Chloe Davis', orderedDate: '06/04/2026', orderedTime: '12:11 PM', reqDate: '06/04/2026', reqTime: '9:00 AM - 1:00 PM CT', schedDate: '', schedTime: '', status: { t: 'Acknowledged', v: 'caution' }, scheduleStatus: { t: 'Provider Review', v: 'caution' }, tags: [],
      client: 'Big Heart Hospice & Home Care', branch: 'Big Heart Gadsden', addrType: 'Residence', addr: ['8738 Oak Hill Rd #415', 'Gadsden, AL, 35904'], contact: 'Gloria', rel: 'Spouse', phone: '(334) 720-1853', phoneType: 'Mobile', warehouse: 'Trussville, AL' },
    { assignee: 'Me', order: '123455017', orderType: 'Pickup', note: false, priority: 'Routine', priorityStat: false, reason: 'Not Needed', patient: 'Lucas White', orderedDate: '06/04/2026', orderedTime: '3:46 PM', reqDate: '06/05/2026', reqTime: '3:00 - 7:00 PM CT', schedDate: '06/05/2026', schedTime: '4:00 - 8:00 PM CT', status: { t: 'Acknowledged', v: 'caution' }, scheduleStatus: { t: 'Rescheduled', v: 'info' }, tags: [],
      client: 'Comfort Home Health', branch: 'Trussville, AL', addrType: 'Residence', addr: ['6710 Montevallo Rd', 'Trussville, AL, 35235'], contact: 'Betty', rel: 'Spouse', phone: '(938) 274-1299', phoneType: 'Mobile', warehouse: 'Trussville, AL' },
    { assignee: 'Me', order: '123455013', orderType: 'Delivery', note: true, priority: 'Routine', priorityStat: false, reason: 'Add-On General', patient: 'Ethan Carter', orderedDate: '06/04/2026', orderedTime: '7:02 AM', reqDate: '06/05/2026', reqTime: '4:00 - 8:00 PM CT', schedDate: '06/05/2026', schedTime: '5:00 - 9:00 PM CT', status: { t: 'En route', v: 'warning' }, scheduleStatus: { t: 'Patient Approval', v: 'warning' }, tags: [],
      client: 'HarborLight Hospice Care', branch: 'HarborLight Hospice Care - Birmingham', addrType: 'Residence', addr: ['2778 Deerfoot Pkwy', 'Birmingham, AL, 35209'], contact: 'Shaniqua', rel: 'Spouse', phone: '(205) 738-6148', phoneType: 'Mobile', warehouse: 'Birmingham, AL' },
    { assignee: 'Me', order: '123455019', orderType: 'Delivery', note: false, priority: 'Coordination', priorityStat: false, reason: 'Hi-Tech Respiratory', patient: 'Ava Thompson', orderedDate: '06/04/2026', orderedTime: '1:22 PM', reqDate: '', reqTime: '', schedDate: '', schedTime: '', status: { t: 'Completed', v: 'success' }, scheduleStatus: { t: 'Patient Scheduling', v: 'warning' }, tags: [],
      client: 'Comfort Home Health', branch: 'Birmingham, AL', addrType: 'Residence', addr: ['5225 Black Creek Pkwy #349', 'Birmingham, AL, 35205'], contact: 'Patricia Anderson', rel: 'Caregiver', phone: '(256) 910-0634', phoneType: 'Landline', warehouse: 'Birmingham, AL' },
    { assignee: 'Me', order: '123455021', orderType: 'Delivery', note: false, priority: 'Standard', priorityStat: false, reason: 'Service: Bed Equipment', patient: 'James Wilson', orderedDate: '06/04/2026', orderedTime: '5:49 PM', reqDate: '06/05/2026', reqTime: '6:00 - 10:00 PM CT', schedDate: '', schedTime: '', status: { t: 'Acknowledged', v: 'caution' }, scheduleStatus: { t: 'Escalated', v: 'error' }, tags: [{ t: 'Service', v: 'neutral' }],
      client: 'HarborLight Hospice Care', branch: 'HarborLight Hospice Care - Birmingham', addrType: 'Residence', addr: ['5469 Noble St', 'Birmingham, AL, 35209'], contact: 'Mary Wilson', rel: 'Child', phone: '(938) 249-3664', phoneType: 'Mobile', warehouse: 'Birmingham, AL' }
  ];

  /* Dispatch-specific overrides — applied on top of DEFAULT_ROWS for the dispatch variant.
     Only fields that differ from (or are absent in) the scheduling/manager view are listed here.
     Every dispatch order carries its own schedDate/schedTime (no fallback to requested).
     Order status lives on the main row (status); the dispatch badge is derived from it. */
  var DISPATCH_OVERRIDES = {
    '123455005': { schedDate: '06/04/2026', schedTime: '10:00 AM - 2:00 PM CT',
                   etaTime: '11:12 - 11:54 AM', etaCaption: 'En route', etaCaptionColor: 'warning',  completedDate: '',           completedTime: '',        driver: 'Hannah S.', route: '12' },
    '123455003': { schedDate: '06/04/2026', schedTime: '11:00 AM - 3:00 PM CT',
                   etaTime: '',              etaCaption: '',        etaCaptionColor: '',         completedDate: '',           completedTime: ''       },
    '123455007': { etaTime: '',              etaCaption: 'Delayed', etaCaptionColor: 'warning',  completedDate: '',           completedTime: '',        driver: 'Eric E.', route: '4'  },
    '123455009': { schedDate: '06/04/2026', schedTime: '1:00 - 5:00 PM CT',
                   etaTime: '4:04 PM',       etaCaption: 'Arrived', etaCaptionColor: 'success',  completedDate: '06/04/2026', completedTime: '4:26 PM', driver: 'Eric E.', route: '4'  },
    '123455011': { schedDate: '06/04/2026', schedTime: '8:00 AM - 12:00 PM CT',
                   etaTime: '10:11 AM',      etaCaption: 'En route', etaCaptionColor: 'warning', completedDate: '',           completedTime: '',        driver: 'Oscar R.', route: '8'  },
    '123455015': { schedDate: '06/04/2026', schedTime: '9:00 AM - 1:00 PM CT',
                   etaTime: '',              etaCaption: '',        etaCaptionColor: '',         completedDate: '',           completedTime: '',        driver: 'Eric E.', route: '4'  },
    '123455017': { etaTime: '',              etaCaption: '',        etaCaptionColor: '',         completedDate: '',           completedTime: ''       },
    '123455013': { etaTime: '6:54 PM',       etaCaption: 'Arrived', etaCaptionColor: 'success',  completedDate: '',           completedTime: '',        driver: 'Eric E.', route: '4'  },
    '123455019': { schedDate: '06/05/2026', schedTime: '6:00 - 10:00 PM',
                   etaDate: '06/04/2026', etaTime: '1:22 PM',   completedDate: '06/04/2026', completedTime: '1:22 PM', driver: 'Hannah S.', route: '12' },
    '123455021': { schedDate: '06/05/2026', schedTime: '6:00 - 10:00 PM CT',
                   etaTime: '',              etaCaption: '',        etaCaptionColor: '',         completedDate: '',           completedTime: ''       }
  };

  window.SMART_ROUTING_DISPATCH_ROWS = window.SMART_ROUTING_DEFAULT_ROWS.map(function (r) {
    return Object.assign({}, r, DISPATCH_OVERRIDES[r.order] || {});
  });
})();
