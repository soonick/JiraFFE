var createButton = document.getElementById('create_link');
createButton.addEventListener('click', function() {
  fields = [
    'components-multi-select',
    'versions-multi-select',
    'fixVersions-multi-select',
    'customfield_10484',
    'customfield_10632_container',
    'customfield_11090',
    'customfield_10150',
    {
      id: 'customfield_10676-1',
      depth: 2
    },
    {
      id: 'customfield_10677-1',
      depth: 2
    },
    'environment',
    {
      id: 'attachment_div',
      depth: 2
    },
    {
      id: 'cf-customfield_10062',
      depth: 2
    },
    {
      id: 'cf-customfield_10063',
      depth: 2
    },
    'customfield_10071',
    'customfield_10114',
    'customfield_10113',
    'customfield_10132',
    'customfield_10133',
    'customfield_10135',
    'customfield_10136',
    {
      id: 'customfield_10355-1',
      depth: 2
    },
    'duedate',
    'timetracking_originalestimate',
    'timetracking_remainingestimate',
    'customfield_10191',
    'customfield_10202',
    'customfield_10353',
    'customfield_10384',
    'customfield_10460',
    {
      id: 'cf-customfield_10675',
      depth: 2
    },
    'customfield_11206',
    'customfield_11207',
    'customfield_11209',
    'customfield_11308',
    'customfield_11693',
    'customfield_11797',
    'customfield_10431'
  ];

  var hideElements = function() {
    var element;
    var depth;

    for (var i in fields) {
      if ('string' === typeof fields[i]) {
        depth = 1;
        element = document.getElementById(fields[i]);
      } else {
        depth = fields[i].depth;
        element = document.getElementById(fields[i].id);
      }

      // If any of the elements are not ready probably none of them will be.
      // Try again later
      if (!element) {
        setTimeout(hideElements, 100);
        return;
      }

      for (var j = 0; j < depth; j++) {
        element = element.parentNode;
      }

      element.style.display = 'none';
    }
  };

  setTimeout(hideElements, 100);
});
