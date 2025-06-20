document.addEventListener("DOMContentLoaded", function () {
  const linkButtons = document.querySelectorAll('a[data-platform]');

  linkButtons.forEach(function (link) {
    link.addEventListener('click', function () {
      const platform = link.getAttribute('data-platform');
      if (platform) {
        fbq('trackCustom', 'MusicPlatformClick', {
          platform: platform
        });
        // For debugging:
        // console.log(`fbq event fired for: ${platform}`);
      }
    });
  });
});
