export const geometrie = {
  //   aireCarreFn: function (cote) {},
  aireCarre: (cote) => {
    if (cote <= 0) throw new Error("Le côté du carré doit être positif");
    return cote * cote;
  },
  perimetreCarre: (cote) => {
    if (cote <= 0) throw new Error("Le côté du carré doit être positif");
    return cote * 4;
  },
};
