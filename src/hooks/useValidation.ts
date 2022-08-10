import { useState } from 'react';

export const useValidation = () => {
  // 緯度
  const isLatValid = (lat: number) => {
    if (lat >= 20 && lat <= 46) {
      return true;
    }
    return false;
  };

  // 経度
  const isLonValid = (lon: number) => {
    if (lon >= 122 && lon <= 154) {
      return true;
    }
    return false;
  };

  return {
    isLatValid,
    isLonValid,
  };
};
