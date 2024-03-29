/*!
  * Namespacer: you know, for namespacing
  * Ed Fuhrken
  * https://github.com/edfuh/namespacer
  * License WTFPL
  */
!function () {
  function namespacer(ns, obj) {
    // namespace name must be a non empty string
    if (typeof ns !== "string" || !ns.length) {
      throw new Error('[namespacer] Invalid namespace');
    }

    var 
      parts = ns.split('.'),
      namespace = this,
      i = 0,
      j = parts.length,
      b;

    for (; i < j; i++) {
      namespace = namespace[parts[i]] = namespace[parts[i]] || {};
    }

    if (typeof obj === 'object') {
      for (b in obj) {
        namespace[b] = obj[b];
      }
    }

    return namespace;
  }

  this['namespacer'] = this['ns'] = namespacer;
}();