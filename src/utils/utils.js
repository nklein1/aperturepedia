
export function getRandomString() {
  return Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8);
}

export function parseLensColumns(type) {
  let columnsToRender = [];
  if (type === 'minolta_sr') {
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
      {'name': 'Links', 'slug': 'sources'},
      {'name': 'Notes?', 'slug': 'notes'}
    ];
  } else if (type === 'konica_ar') {
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
      {'name': 'Links', 'slug': 'sources'},
      {'name': 'Notes?', 'slug': 'notes'}
    ];
  } else if (type === 'olympus_om') {
    columnsToRender = [
      {'name': 'Focal Length', 'slug': 'focalLength'},
      {'name': 'Maximum Aperture', 'sName': 'Max. Aperture', 'slug': 'maxAperture'},
      {'name': 'Lens Name', 'slug': 'name'},
      {'name': 'Minimum Aperture', 'sName': 'Min. Aperture', 'slug': 'minAperture'},
      {'name': 'Elements', 'sName': 'El.', 'slug': 'elements'},
      {'name': 'Groups', 'sName': 'Gr.', 'slug': 'groups'},
      {'name': 'Lens Blades', 'slug': 'blades'},
      {'name': 'Close Focus (m)', 'slug': 'closeFocus'},
      {'name': 'Filter Thread (mm)', 'slug': 'filterThread'},
      {'name': 'Diameter (mm)', 'slug': 'diameter'},
      {'name': 'Length (mm)', 'slug': 'length'},
      {'name': 'Weight (g)', 'slug': 'weight'},
      {'name': 'Year', 'slug': 'yearIntroduced'},
      {'name': 'Links', 'slug': 'sources'},
      {'name': 'Notes?', 'slug': 'notes'}
    ];
  } else if (type === 'pentax_m37') {
    columnsToRender = [
      {'name': 'Focal Length', 'slug': 'focalLength'},
      {'name': 'Maximum Aperture', 'sName': 'Max. Aperture', 'slug': 'maxAperture'},
      {'name': 'Lens Name', 'slug': 'name'},
      {'name': 'Minimum Aperture', 'sName': 'Min. Aperture', 'slug': 'minAperture'},
      {'name': 'Elements', 'sName': 'El.', 'slug': 'elements'},
      {'name': 'Groups', 'sName': 'Gr.', 'slug': 'groups'},
      {'name': 'Lens Blades', 'slug': 'blades'},
      {'name': 'Close Focus (m)', 'slug': 'closeFocus'},
      {'name': 'Filter Thread (mm)', 'slug': 'filterThread'},
      {'name': 'Diaphram Type', 'slug': 'diaphramType'},
      {'name': 'Diameter (mm)', 'slug': 'diameter'},
      {'name': 'Length (mm)', 'slug': 'length'},
      {'name': 'Weight (g)', 'slug': 'weight'},
      {'name': 'Year', 'slug': 'yearIntroduced'},
      {'name': 'Links', 'slug': 'sources'},
      {'name': 'Notes?', 'slug': 'officialNotes'}
    ];
  } else if (type === 'pentax_m42') {
    columnsToRender = [
      {'name': 'Focal Length', 'slug': 'focalLength'},
      {'name': 'Maximum Aperture', 'sName': 'Max. Aperture', 'slug': 'maxAperture'},
      {'name': 'Lens Name', 'slug': 'name'},
      {'name': 'Minimum Aperture', 'sName': 'Min. Aperture', 'slug': 'minAperture'},
      {'name': 'Elements', 'sName': 'El.', 'slug': 'elements'},
      {'name': 'Groups', 'sName': 'Gr.', 'slug': 'groups'},
      {'name': 'Lens Blades', 'slug': 'blades'},
      {'name': 'Close Focus (m)', 'slug': 'closeFocus'},
      {'name': 'Filter Thread (mm)', 'slug': 'filterThread'},
      {'name': 'Diaphram Type', 'slug': 'diaphramType'},
      {'name': 'Diameter (mm)', 'slug': 'diameter'},
      {'name': 'Length (mm)', 'slug': 'length'},
      {'name': 'Weight (g)', 'slug': 'weight'},
      {'name': 'Year', 'slug': 'yearIntroduced'},
      {'name': 'Links', 'slug': 'sources'},
      {'name': 'Notes?', 'slug': 'notes'}
    ];
  } else if (type === 'pentax_k') {
    columnsToRender = [
      {'name': 'Focal Length', 'slug': 'focalLength'},
      {'name': 'Maximum Aperture', 'sName': 'Max. Aperture', 'slug': 'maxAperture'},
      {'name': 'Lens Name', 'slug': 'name'},
      {'name': 'Minimum Aperture', 'sName': 'Min. Aperture', 'slug': 'minAperture'},
      {'name': 'Elements', 'sName': 'El.', 'slug': 'elements'},
      {'name': 'Groups', 'sName': 'Gr.', 'slug': 'groups'},
      {'name': 'Aperture Blades', 'slug': 'blades'},
      {'name': 'Close Focus (m)', 'slug': 'closeFocus'},
      {'name': 'Filter Thread (mm)', 'slug': 'filterThread'},
      {'name': 'Diameter (mm)', 'slug': 'diameter'},
      {'name': 'Length (mm)', 'slug': 'length'},
      {'name': 'Weight (g)', 'slug': 'weight'},
      {'name': 'Year', 'slug': 'yearIntroduced'},
      {'name': 'Links', 'slug': 'sources'},
      {'name': 'Notes?', 'slug': 'notes'}
    ];
  } else if (type === 'canon_fd') {
    columnsToRender = [
      {'name': 'Focal Length', 'slug': 'focalLength'},
      {'name': 'Maximum Aperture', 'sName': 'Max. Aperture', 'slug': 'maxAperture'},
      {'name': 'Lens Name', 'slug': 'name'},
      {'name': 'Minimum Aperture', 'sName': 'Min. Aperture', 'slug': 'minAperture'},
      {'name': 'Elements', 'sName': 'El.', 'slug': 'elements'},
      {'name': 'Groups', 'sName': 'Gr.', 'slug': 'groups'},
      {'name': 'Aperture Blades', 'slug': 'blades'},
      {'name': 'Close Focus (m)', 'slug': 'closeFocus'},
      {'name': 'Filter Thread (mm)', 'slug': 'filterThread'},
      {'name': 'Diameter (mm)', 'slug': 'diameter'},
      {'name': 'Length (mm)', 'slug': 'length'},
      {'name': 'Weight (g)', 'slug': 'weight'},
      {'name': 'Date Introduced', 'slug': 'yearIntroduced'},
      {'name': 'Links', 'slug': 'sources'},
      {'name': 'Notes?', 'slug': 'officialNotes'}
    ];
  } else if (type === 'nikon_f') {
    columnsToRender = [
      {'name': 'Focal Length', 'slug': 'focalLength'},
      {'name': 'Maximum Aperture', 'sName': 'Max. Aperture', 'slug': 'maxAperture'},
      {'name': 'Lens Name', 'slug': 'name'},
      {'name': 'Minimum Aperture', 'sName': 'Min. Aperture', 'slug': 'minAperture'},
      {'name': 'Elements', 'sName': 'El.', 'slug': 'elements'},
      {'name': 'Groups', 'sName': 'Gr.', 'slug': 'groups'},
      {'name': 'Aperture Blades', 'slug': 'blades'},
      {'name': 'Close Focus (m)', 'slug': 'closeFocus'},
      {'name': 'Filter Thread (mm)', 'slug': 'filterThread'},
      {'name': 'Diameter (mm)', 'slug': 'diameter'},
      {'name': 'Length (mm)', 'slug': 'length'},
      {'name': 'Weight (g)', 'slug': 'weight'},
      {'name': 'Date Introduced', 'slug': 'yearIntroduced'},
      {'name': 'Style', 'slug': 'style'},
      {'name': 'Links', 'slug': 'sources'},
      {'name': 'Notes?', 'slug': 'notes'}
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
