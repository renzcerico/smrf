export const requests = [
    {
      id: 1,
      recipient: 1,
      date_required: '2020-01-03',
      priority: 'normal',
      req_details: [{ request: 1, description: 'SET UP / ADJUSTMENT', remarks: 'Your remarks.' },
                    { request: 2, description: 'REPAIR / REPLACEMENT', remarks: 'Remarks' }],
      description: 'This is a description. URGENT!',
      machine: 'none',
      representative: '1',
      department: 'opt',
      stopped: '2020-10-23T22:01',
      status: 'delivered'
    },
    {
      id: 2,
      recipient: 2,
      date_required: '2020-02-04',
      priority: 'urgent',
      req_details: [{ request: 1, description: 'SET UP / ADJUSTMENT', remarks: 'Your remarks.' },
                    { request: 2, description: 'REPAIR / REPLACEMENT', remarks: 'Remarks' }],
      description: 'ANOTHER DESCRIPTION?!',
      machine: 'none',
      representative: '1',
      department: 'opt',
      stopped: '2020-10-23T22:01',
      status: 'delivered'
    },
    {
      id: 3,
      recipient: 1,
      date_required: '2020-03-05',
      priority: 'normal',
      req_details: [{ request: 1, description: 'SET UP / ADJUSTMENT', remarks: 'Your remarks.' },
                    { request: 2, description: 'REPAIR / REPLACEMENT', remarks: 'Remarks' }],
      description: 'WHAT A DESCRIPTION!',
      machine: 'none',
      representative: '1',
      department: 'opt',
      stopped: '2020-10-23T22:01',
      status: 'delivered'
    },
    {
      id: 4,
      recipient: 2,
      date_required: '2019-12-20',
      priority: 'normal',
      req_details: ['2', '1'],
      description: 'This is a description 1',
      machine: 'none',
      department: '1',
      stopped: '',
      status: 'delivered'
    },
    {
      id: 5,
      recipient: 1,
      date_required: '2019-12-20',
      priority: 'normal',
      req_details: ['3'],
      description: 'This is a description 2',
      machine: 'none',
      department: '1',
      stopped: '',
      status: 'delivered'
    },
    {
      id: 6,
      recipient: 1,
      date_required: '2019-12-20',
      priority: 'normal',
      req_details: ['4'],
      description: 'This is a description 3',
      machine: 'none',
      department: '1',
      stopped: '',
      status: 'delivered'
    },
    {
      id: 7,
      recipient: 1,
      date_required: '2019-12-20',
      priority: 'normal',
      req_details: ['2', '1'],
      description: 'This is a description 1',
      machine: 'none',
      department: '1',
      stopped: '',
      status: 'approved'
    },
    {
      id: 8,
      recipient: 1,
      date_required: '2019-12-20',
      priority: 'normal',
      req_details: ['3'],
      description: 'This is a description 2',
      machine: 'none',
      department: '1',
      stopped: '',
      status: 'approved'
    },
    {
      id: 9,
      recipient: 1,
      date_required: '2019-12-20',
      priority: 'normal',
      req_details: ['4'],
      description: 'This is a description 3',
      machine: 'none',
      department: '1',
      stopped: '',
      status: 'approved'
    },
    {
      id: 10,
      recipient: 1,
      date_required: '2019-12-20',
      priority: 'normal',
      req_details: ['4'],
      description: 'This is a description 3',
      machine: 'none',
      department: '1',
      stopped: '',
      status: 'done'
    }
  ];
