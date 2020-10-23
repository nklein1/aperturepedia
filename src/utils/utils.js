
export function getRandomString() {
  return Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8);
}


export function getFullLensName(lens) {
  if (lens.fullName) {
    return lens.fullName;
  }
  return lens.focalLength + 'mm f/' + lens.maxAperture + ' ' + lens.name;
}

export function parseLensColumns(type) {
  let columnsToRender = [];
  if (type === 'minolta_sr' || type === 'konica_ar') {
    columnsToRender = [
      {'name': 'Focal Length', 'slug': 'focalLength'},
      {'name': 'Maximum Aperture', 'sName': 'Max. Aperture', 'slug': 'maxAperture'},
      {'name': 'Lens Name', 'slug': 'name'},
      {'name': 'Minimum Aperture', 'sName': 'Min. Aperture', 'slug': 'minAperture'},
      {'name': 'Elements', 'sName': 'El.', 'slug': 'elements'},
      {'name': 'Groups', 'sName': 'Gr.', 'slug': 'groups'},
      // {'name': 'Lens Blades', 'slug': 'blades'},
      {'name': 'Close Focus (m)', 'slug': 'closeFocus'},
      {'name': 'Filter Thread (mm)', 'slug': 'filterThread'},
      {'name': 'Diameter (mm)', 'slug': 'diameter'},
      {'name': 'Length (mm)', 'slug': 'length'},
      {'name': 'Weight (g)', 'slug': 'weight'},
      {'name': 'Lens Hood', 'sName': 'Hood', 'slug': 'lensHood'},
      {'name': 'Year', 'slug': 'yearIntroduced'},
      {'name': 'Style', 'slug': 'style'},
      {'name': 'Resources', 'slug': 'sources'}
    ];
  } else if (type === 'pentax_m42' || type === 'pentax_m37') {
    columnsToRender = [
      {'name': 'Focal Length', 'slug': 'focalLength'},
      {'name': 'Maximum Aperture', 'sName': 'Max. Aperture', 'slug': 'maxAperture'},
      {'name': 'Lens Name', 'slug': 'name'},
      {'name': 'Minimum Aperture', 'sName': 'Min. Aperture', 'slug': 'minAperture'},
      {'name': 'Elements', 'sName': 'El.', 'slug': 'elements'},
      {'name': 'Groups', 'sName': 'Gr.', 'slug': 'groups'},
      {'name': 'Aperture Blades', 'sName': 'Blades', 'slug': 'blades'},
      {'name': 'Close Focus (m)', 'slug': 'closeFocus'},
      {'name': 'Filter Thread (mm)', 'slug': 'filterThread'},
      {'name': 'Diaphragm Type', 'slug': 'diaphragmType'},
      {'name': 'Diameter (mm)', 'slug': 'diameter'},
      {'name': 'Length (mm)', 'slug': 'length'},
      {'name': 'Weight (g)', 'slug': 'weight'},
      {'name': 'Year', 'slug': 'yearIntroduced'},
      {'name': 'Resources', 'slug': 'sources'}
    ];
  } else if (type === 'pentax_k' || type === 'canon_fd' || type === 'olympus_om' || type === 'zeiss_cy') {
    columnsToRender = [
      {'name': 'Focal Length', 'slug': 'focalLength'},
      {'name': 'Maximum Aperture', 'sName': 'Max. Aperture', 'slug': 'maxAperture'},
      {'name': 'Lens Name', 'slug': 'name'},
      {'name': 'Minimum Aperture', 'sName': 'Min. Aperture', 'slug': 'minAperture'},
      {'name': 'Elements', 'sName': 'El.', 'slug': 'elements'},
      {'name': 'Groups', 'sName': 'Gr.', 'slug': 'groups'},
      {'name': 'Aperture Blades', 'sName': 'Blades', 'slug': 'blades'},
      {'name': 'Close Focus (m)', 'slug': 'closeFocus'},
      {'name': 'Filter Thread (mm)', 'slug': 'filterThread'},
      {'name': 'Diameter (mm)', 'slug': 'diameter'},
      {'name': 'Length (mm)', 'slug': 'length'},
      {'name': 'Weight (g)', 'slug': 'weight'},
      {'name': 'Year', 'slug': 'yearIntroduced'},
      {'name': 'Resources', 'slug': 'sources'}
    ];
  } else if (type === 'nikon_f') {
    columnsToRender = [
      {'name': 'Focal Length', 'slug': 'focalLength'},
      {'name': 'Maximum Aperture', 'sName': 'Max. Aperture', 'slug': 'maxAperture'},
      {'name': 'Lens Name', 'slug': 'name'},
      {'name': 'Minimum Aperture', 'sName': 'Min. Aperture', 'slug': 'minAperture'},
      {'name': 'Elements', 'sName': 'El.', 'slug': 'elements'},
      {'name': 'Groups', 'sName': 'Gr.', 'slug': 'groups'},
      {'name': 'Aperture Blades', 'sName': 'Blades', 'slug': 'blades'},
      {'name': 'Close Focus (m)', 'slug': 'closeFocus'},
      {'name': 'Filter Thread (mm)', 'slug': 'filterThread'},
      {'name': 'Diameter (mm)', 'slug': 'diameter'},
      {'name': 'Length (mm)', 'slug': 'length'},
      {'name': 'Weight (g)', 'slug': 'weight'},
      {'name': 'Date Introduced', 'sName': 'Year', 'slug': 'yearIntroduced'},
      {'name': 'Style', 'slug': 'style'},
      {'name': 'Resources', 'slug': 'sources'}
      // {'name': 'Notes?', 'slug': 'notes'}
    ];
  }
  return columnsToRender;
}

// Parse lens style to SCSS selector
export function parseClassFromStyle(lensType) {
  let str = '';
  if (lensType) {
    str = lensType.toLowerCase().replace(/\s+|-+/ig, '');
  }
  return str;
}
