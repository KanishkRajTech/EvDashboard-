import Papa from 'papaparse';

export const loadEVData = async () => {
  try {
    const response = await fetch('/Electric_Vehicle_Population_Data.csv');
    const text = await response.text();
    
    console.log(text);
    
    return new Promise((resolve) => {
      Papa.parse(text, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          resolve(results.data);
        }
      });
    });
  } catch (error) {
    console.error('Error loading CSV:', error);
    return [];
  }
};