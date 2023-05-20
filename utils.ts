export const searchByName = (items: {name: string, [key: string]: any}[], searchTerm: string) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
  
    return items.filter((item) => {
      const lowerCaseName = item.name.toLowerCase();
      return lowerCaseName.includes(lowerCaseSearchTerm);
    });
};

