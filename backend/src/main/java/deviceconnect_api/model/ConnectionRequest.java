package deviceconnect_api.model;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


public record ConnectionRequest(

        @NotBlank(message = "Protocol is required")
        String protocol,

        @NotBlank(message = "host is required")
        String host,

        @Min(value = 1 , message = "Port must be atleast 1")
        @Max(value = 65535 , message = "Port must not exceed 65535")
        int port

) {
}
