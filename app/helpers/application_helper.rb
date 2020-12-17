module ApplicationHelper
  def embed_js_variables(data)
    javascript_tag("window.embeddedVariables = #{data.to_json};".html_safe)
  end
end
