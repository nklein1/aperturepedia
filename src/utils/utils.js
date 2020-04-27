
export function getRandomString() {
  return Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8);
}

export function parseLensColumns(type) {
  let columnsToRender = [];
  if (type === 'minolta_sr') {
    columnsToRender = [
      {'name': 'Focal Length', 'slug': 'focalLength'},
      {'name': 'Maximum Aperture', 'slug': 'maxAperture'},
      {'name': 'Lens Name', 'slug': 'name'},
      {'name': 'Minimum Aperture', 'slug': 'minAperture'},
      {'name': 'Elements', 'slug': 'elements'},
      {'name': 'Groups', 'slug': 'groups'},
      // {'name': 'Lens Blades', 'slug': 'blades'},
      {'name': 'Filter Thread (mm)', 'slug': 'filterThread'},
      {'name': 'Lens Shade', 'slug': 'lensShade'},
      {'name': 'Close Focus (m)', 'slug': 'closeFocus'},
      {'name': 'Diameter (mm)', 'slug': 'diameter'},
      {'name': 'Length (mm)', 'slug': 'length'},
      {'name': 'Weight (g)', 'slug': 'weight'},
      {'name': 'Year Introduced', 'slug': 'yearIntroduced'},
      {'name': 'Style', 'slug': 'style'},
      {'name': 'Notes?', 'slug': 'notes'}
    ];
  } else if (type === 'pentax_m42') {
    columnsToRender = [
      {'name': 'Focal Length', 'slug': 'focalLength'},
      {'name': 'Maximum Aperture', 'slug': 'maxAperture'},
      {'name': 'Lens Name', 'slug': 'name'},
      {'name': 'Minimum Aperture', 'slug': 'minAperture'},
      {'name': 'Elements', 'slug': 'elements'},
      {'name': 'Groups', 'slug': 'groups'},
      {'name': 'Lens Blades', 'slug': 'blades'},
      {'name': 'Filter Thread (mm)', 'slug': 'filterThread'},
      {'name': 'Diaphram Type', 'slug': 'diaphramType'},
      {'name': 'Close Focus (m)', 'slug': 'closeFocus'},
      {'name': 'Diameter (mm)', 'slug': 'diameter'},
      {'name': 'Length (mm)', 'slug': 'length'},
      {'name': 'Weight (g)', 'slug': 'weight'},
      {'name': 'Year Introduced', 'slug': 'yearIntroduced'},
      {'name': 'Notes?', 'slug': 'notes'}
    ];
  } else if (type === 'pentax_k') {
    columnsToRender = [
      {'name': 'Focal Length', 'slug': 'focalLength'},
      {'name': 'Maximum Aperture', 'slug': 'maxAperture'},
      {'name': 'Lens Name', 'slug': 'name'},
      {'name': 'Minimum Aperture', 'slug': 'minAperture'},
      {'name': 'Elements', 'slug': 'elements'},
      {'name': 'Groups', 'slug': 'groups'},
      {'name': 'Aperture Blades', 'slug': 'blades'},
      {'name': 'Filter Thread (mm)', 'slug': 'filterThread'},
      {'name': 'Close Focus (m)', 'slug': 'closeFocus'},
      {'name': 'Diameter (mm)', 'slug': 'diameter'},
      {'name': 'Length (mm)', 'slug': 'length'},
      {'name': 'Weight (g)', 'slug': 'weight'},
      {'name': 'Year Introduced', 'slug': 'yearIntroduced'},
      // {'name': 'Source', 'slug': 'source'},
      {'name': 'Notes?', 'slug': 'notes'}
    ];
  } else if (type === 'canon_fd') {
    columnsToRender = [
      {'name': 'Focal Length', 'slug': 'focalLength'},
      {'name': 'Maximum Aperture', 'slug': 'maxAperture'},
      {'name': 'Lens Name', 'slug': 'name'},
      {'name': 'Minimum Aperture', 'slug': 'minAperture'},
      {'name': 'Elements', 'slug': 'elements'},
      {'name': 'Groups', 'slug': 'groups'},
      {'name': 'Aperture Blades', 'slug': 'blades'},
      {'name': 'Filter Thread (mm)', 'slug': 'filterThread'},
      {'name': 'Close Focus (m)', 'slug': 'closeFocus'},
      {'name': 'Diameter (mm)', 'slug': 'diameter'},
      {'name': 'Length (mm)', 'slug': 'length'},
      {'name': 'Weight (g)', 'slug': 'weight'},
      {'name': 'Date Introduced', 'slug': 'yearIntroduced'},
      // {'name': 'Source', 'slug': 'source'},
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
