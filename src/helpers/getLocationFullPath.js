/**
 * get location full path
 *
 * @returns {string}
 */
export default function getLocationFullPath() {
  return (
    window.location.pathname + window.location.search + window.location.hash
  );
}
