package com.mintre.web_mintre;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.mintre.web_mintre.repository")
@SpringBootApplication()
public class WebMintreApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebMintreApplication.class, args);
	}

}
