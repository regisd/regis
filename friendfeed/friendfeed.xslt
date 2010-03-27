<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
    <xsl:output method="html"/>

    <xsl:template match="/">
    <xsl:value-of select="$before_widget" disable-output-escaping="yes" />
    <xsl:value-of select="$before_title" disable-output-escaping="yes" />
    <xsl:apply-templates select="/atom:feed/atom:head"/>
    <xsl:value-of select="$after_title" disable-output-escaping="yes" />
    <xsl:apply-templates select="/atom:feed"/>
    <xsl:value-of select="$after_widget" disable-output-escaping="yes" />
    </xsl:template>
    <xsl:template match="atom:feed/atom:head">
        <h3><xsl:value-of select="atom:title"/></h3>
        <xsl:if test="atom:tagline"><p><xsl:value-of select="atom:tagline"/></p></xsl:if>
        <xsl:if test="atom:subtitle"><p><xsl:value-of select="atom:subtitle"/></p></xsl:if>
       
    </xsl:template>

    <xsl:template match="/atom:feed">
        <h3><xsl:value-of select="atom:title"/></h3>
        <xsl:if test="atom:tagline"><p><xsl:value-of select="atom:tagline"/></p></xsl:if>
        <xsl:if test="atom:subtitle"><p><xsl:value-of select="atom:subtitle"/></p></xsl:if>
        <ul>
            <xsl:apply-templates select="atom:entry"/>
        </ul>
    </xsl:template>
    <xsl:template match="atom:entry">
	<xsl:if test="position() &lt;= $items">
		<li>
			<a href="{atom:link[@rel='alternate']/@href}" title="{substring(atom:published, 0, 11)}">
				<xsl:value-of select="atom:title" />
			</a>
			<xsl:choose>
				<xsl:when test="atom:content != ''">
					<xsl:apply-templates select="atom:content" />
				</xsl:when>
				<xsl:otherwise>
					<p>
						<xsl:value-of select="atom:summary"
							disable-output-escaping="yes" />
					</p>
				</xsl:otherwise>
			</xsl:choose>
		</li>
	</xsl:if>
    </xsl:template>
    <xsl:template match="atom:content">
            <xsl:variable name="ffcontent" select="./xhtml:div/xhtml:div/xhtml:table/xhtml:tr/xhtml:td[2]/xhtml:div"/>
      <div class="textwidget"><xsl:copy-of select="$ffcontent[3]"/></div>
      <div class="textwidget"><xsl:copy-of select="$ffcontent[4]/xhtml:table/xhtml:tr/xhtml:td"/></div>
    </xsl:template>
</xsl:stylesheet>