function showSelectedPublications() {
  CTS.Util.$('.academic-publications-widget a.show-all').css('font-weight', 'normal');
  CTS.Util.$('.academic-publications-widget a.show-selected').css('font-weight', 'bold');
  CTS.Util.$('.academic-publications-widget li[data-selected="FALSE"]').hide();
  CTS.Util.$('.academic-publications-widget li[data-selected="TRUE"]').show();
}
function showAllPublications() {
  CTS.Util.$('.academic-publications-widget a.show-all').css('font-weight', 'bold');
  CTS.Util.$('.academic-publications-widget a.show-selected').css('font-weight', 'normal');
  CTS.Util.$('.academic-publications-widget li[data-selected="FALSE"]').show();
  CTS.Util.$('.academic-publications-widget li[data-selected="TRUE"]').show();
}
