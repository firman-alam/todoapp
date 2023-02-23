export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = getMonthName(date.getMonth());
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

function getMonthName(monthIndex) {
  const monthNames = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  return monthNames[monthIndex];
}

export const ascSort = (a, b) => (a.id > b.id ? 1 : -1);
export const descSort = (a, b) => (a.id < b.id ? 1 : -1);

// title of priority
export const priority = [
  {
    id: 1,
    title: 'Very High',
  },
  {
    id: 2,
    title: 'High',
  },
  {
    id: 3,
    title: 'Medium',
  },
  {
    id: 4,
    title: 'Low',
  },
  {
    id: 5,
    title: 'Very Low',
  },
];

export const sortList = [
  {
    title: 'Terbaru',
    type: 'NEW',
  },
  {
    title: 'Terlama',
    type: 'OLD',
  },
  {
    title: 'A-Z',
    type: 'AZ',
  },
  {
    title: 'Z-A',
    type: 'ZA',
  },
  {
    title: 'Belum Selesai',
    type: 'INCOMPLETE',
  },
];

// sort item_types
export const NEW = 'NEW';
export const OLD = 'OLD';
export const AZ = 'AZ';
export const ZA = 'ZA';
export const INCOMPLETE = 'INCOMPLETE';
