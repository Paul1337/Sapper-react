export const formatTimeItem = (value: number) => value.toString().padStart(2, '0');
export const formatTime = (value: number) => `${Math.floor(value / 60)}:${formatTimeItem(value % 60)}`;
