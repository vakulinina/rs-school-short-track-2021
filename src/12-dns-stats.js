/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  let dnsBuffer;

  const splitDomain = (domain) => {
    if (domain.includes('.')) {
      const domainName = domain.slice(domain.lastIndexOf('.'));
      const dnsEntry = dnsBuffer.join('') + domainName;
      dnsBuffer.push(domainName);
      result[dnsEntry] = ++result[dnsEntry] || 1;
      splitDomain(domain.replace(domainName, ''));
    } else {
      const dnsEntry = `${dnsBuffer.join('')}.${domain}`;
      result[dnsEntry] = result[dnsEntry]++ || 1;
    }
  };

  domains.forEach((domain) => {
    dnsBuffer = [];
    splitDomain(domain);
  });

  return result;
}

module.exports = getDNSStats;
